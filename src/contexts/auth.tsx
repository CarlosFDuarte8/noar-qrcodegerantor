import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { api } from "../services";
import { UserType } from "../types";

interface AuthContextData {
  signed: boolean;
  user: UserType | null;
  refreshing: boolean;
  setFormLogin: any;
  loading: boolean;
  signIn(): Promise<void>;
  signUp(): Promise<void>;
  signOut(): Promise<void>;
  loadUser(): Promise<void>;
  recoverPassword(email: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType | any>({});
  const [formLogin, setFormLogin] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    loadUser();
  }, []);

  async function loadStoragedData() {
    const userData = await api.get('/api/usuario/me');
    console.log("Dados do Usuario:", userData);

    const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

    if (storagedToken ) {
    //   setUser(storagedUser);
      setLoading(false);
      //setToken(storagedToken);
    }

    setRefreshing(false);
  }

  async function signIn(data: any, onNext: any) {
    setLoading(true);
    try {
      setFormLogin(data);
      console.log("Login feito", data);
      Toast.show({
        type: "success",
        text2: "Login aceito",
      });
      const response = await api.post("/api/login", data);
    //   console.log("Response", response);

      if (response.data.token) {
        await AsyncStorage.setItem("@RNAuth:token", response.data.token);
        Toast.show({
          type: "success",
          text2: "Login aceito",
        });

        onNext();
      }
    } catch (error: any) {
      console.error(error);
    }
    setLoading(false);
  }

  async function signUp(data: any, onNext = () => null) {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("@RNAuth:token");
      setFormLogin(data);
      // alert(JSON.stringify(data));
      // console.log(JSON.stringify(data));
      const response = await api.post("/api/usuario", {
        ...data,
        activationCode: codeValidation,
      });
      Alert.alert("Atenção", "Sucesso", [
        {
          text: "OK",
          onPress: async () => {
            navigation.navigate("Home");
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      setUser(null);
    } catch (error) {
      console.error("Error clearing app data.");
    }
  }

  async function getUser(): Promise<UserType[]> {
    const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

    const userStorage = (await AsyncStorage.getItem("@RNApp:user")) || "[]";
    console.log("useS", storagedToken);
    return JSON.parse(storagedToken);
  }

  async function loadUser() {
    setRefreshing(true);
    console.log("Start Refreshig", refreshing);
    const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

    try {
      if (storagedToken) {
        setUser(storagedToken);
      }
    } catch (e) {
      console.error(e.message);
    }
    setLoading(false);
    console.log("End Refreshig", refreshing);

    loadStoragedData();
  }

    async function recoverPassword(email: string) {
      setLoading(true);
      try {
        let response = await api.post('/api/usuario/recuperar-senha', {email});
        console.log(response.data);
        Toast.show({
          type: 'success',
          text2: 'Enviado',
        });
      } catch (e) {
        console.error(e.message);
      }
      setLoading(false);
    }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        // signInPhone,
        signUp,
        signOut,
        loadUser,
        loading,
        refreshing,
        setFormLogin,
        recoverPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

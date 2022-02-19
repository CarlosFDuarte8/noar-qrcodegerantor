import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
//Components
import { HeaderLeft } from "../components";
//Auth
import { ForgotPassword, Login } from "../screens";

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: false,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          // headerRight: () => <HeaderRight />,
        })}
      />

      <Auth.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          // headerRight: () => <HeaderRight />,
        })}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;

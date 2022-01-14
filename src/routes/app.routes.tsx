import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import BottomRoutes from "./bottom.routes";
import { HeaderLeft, HeaderRight } from "../components";
import { Home, Profile, QrCode } from "../screens";

const Stack = createNativeStackNavigator();

const App: React.FC = (props) => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName={"BottomRoutes"}>
      <Stack.Screen
        name="BottomRoutes"
        component={BottomRoutes}
        options={({ navigation }) => ({
          title: "Home",
          headerStyle: {
            backgroundColor: "ccc",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: false,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={true} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={true} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={true} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="QrCode"
        component={QrCode}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: "#fff",
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={true} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default App;

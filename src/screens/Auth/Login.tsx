import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SingIn, SingUp, ForgotPassword } from ".";


const Tab = createMaterialTopTabNavigator();
const Login = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        // tabBarItemStyle: { width: 150 },
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Entrar"
        component={SingIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-enter-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={SingUp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-add-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Esqueceu a Senha?"
        component={ForgotPassword}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-keypad-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Login;

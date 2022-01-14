import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderLeft, HeaderRight } from '../components';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import QrCode from "../screens/QrCode";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const colors = "#ccc";
  const size = 32;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // style: {
        //   borderTopColor: "transparent",
        //   shadowColor: "#000",
        //   backgroundColor: "#ccc",
        //   shadowOffset: {
        //     width: 0,
        //     height: 5,
        //   },
        //   shadowRadius: 2,
        //   shadowOpacity: 1.0,
        //   elevation: 12,
        // },
        // showLabel: true,
        
      }}
      // lazy={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCode}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-edit"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

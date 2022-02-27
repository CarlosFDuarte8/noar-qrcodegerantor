import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderLeft, HeaderRight } from "../components";
import {HomeRoutes, Profile, Others} from "./routes";
import { QrCode, Menus } from "../screens";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const colors = "#ccc";
  const size = 32;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: "blue",
        // tabBarInactiveBackgroundColor: 'red',
        tabBarActiveBackgroundColor: colors,
        tabBarStyle: {
          // borderTopColor: "#000",
          shadowColor: "#fff",
          backgroundColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          height: 60,
          shadowRadius: 20,
          shadowOpacity: 1.0,
          elevation: 1,
          showLabel: true,
        },
        unmountOnBlur: true,
        // headerLeft: () => <HeaderLeft  back={false} />,
        // headerRight: () => <HeaderRight  />,
      }}

      // lazy={false}
    >
      <Tab.Screen
        name="Menu"
        component={Menus}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-menu-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={Others}
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
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            color: "#000",
            backgroundColor: "cyan",
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

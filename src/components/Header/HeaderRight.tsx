/* eslint-disable react-native/no-inline-styles */
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { View } from "react-native";
// contexts
import { useAuth } from "../../contexts";
// components
import { ButtonIcon,Menus } from "../";

type TopNavigationParamsList = {
  Profile: undefined;
};

interface Props {
  navigation?: NativeStackNavigationProp<TopNavigationParamsList, "Profile">;
}

const HeaderRight = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const { signOut } = useAuth();

  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: 80,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <ButtonIcon
          onPress={() => console.log("Notification")}
          icon="ios-notifications-outline"
        />
        {/* <Menus /> */}

        <ButtonIcon
          onPress={() => {
            console.log("singIn");
            signOut();
          }}
          icon="ios-exit-outline"
        />
      </View>
    </View>
  );
};

export default HeaderRight;

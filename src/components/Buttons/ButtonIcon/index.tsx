import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type Props ={
    onPress: () => void;
    icon: string;
    color?: string;
    size?: number;
}
const ButtonIcon = ({onPress, icon, color = "black", size = 24}: Props) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

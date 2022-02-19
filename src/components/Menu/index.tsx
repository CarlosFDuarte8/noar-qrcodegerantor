import React from "react";
import { Menu, Divider, Box, Pressable } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import {ButtonIcon} from '../'

export function Menus() {
  const navigation = useNavigation();
  const [shouldOverlapWithTrigger, setshouldOverlapWithTrigger] = React.useState(true);
  return (
    <Menu
      closeOnSelect={false}
      w="300"
      shouldOverlapWithTrigger={shouldOverlapWithTrigger}
      onOpen={() => console.log("opened")}
      onClose={() => console.log("closed")}
      trigger={(triggerProps) => {
        return (
            <>
            {/* <Pressable {...triggerProps}>
              <Ionicons name="ios-notifications-outline" size={25}/>
            </Pressable> */}
            <ButtonIcon {...triggerProps}
          icon="ios-notifications-outline"/>
            </>
        );
      }}
    >
      <Menu.OptionGroup
        defaultValue="isProfile"
        title={"user?.nome"}
        type="radio"
      >
        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
        <Menu.ItemOption value="Nunito Sans">Nunito Sans</Menu.ItemOption>
        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
      </Menu.OptionGroup>
      <Divider mt="3" w="100%" />
      <Menu.OptionGroup title="" type="checkbox">
        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
        <Menu.ItemOption value="Helvetica">Helvetica</Menu.ItemOption>
      </Menu.OptionGroup>
    </Menu>
  );
}

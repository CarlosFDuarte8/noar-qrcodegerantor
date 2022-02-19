import React from "react";
import { Menu, Divider, Box, Pressable } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

// import {LanguagePanel, MenuList} from '~/components';
// import {useAuth} from '~/contexts';

export function Menus() {
  //   const {user} = useAuth();
  const navigation = useNavigation();
  const [shouldOverlapWithTrigger] = React.useState(false);
  return (
    <Menu
      closeOnSelect={false}
      w="259"
      shouldOverlapWithTrigger={shouldOverlapWithTrigger}
      onOpen={() => console.log("opened")}
      onClose={() => console.log("closed")}
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <FontAwesome name="question-circle" size={25} color={"black"} />
          </Pressable>
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

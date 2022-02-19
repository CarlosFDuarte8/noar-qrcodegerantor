import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import { Divider, Switch, VStack } from "native-base";
import FastImage from "react-native-fast-image";
import { useTheme } from "@react-navigation/native";

import { ScrollAnimatedHeader } from "../../components";

const Profile = () => {
  const [tema, setTema] = useState(true);
  const {colors, dark} = useTheme();
console.log('Ligth:', colors)
console.log('Dark:', dark)
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>Tema</Text>
      <VStack
        space={2}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>Dark</Text>
        <Switch
          defaultIsChecked
          colorScheme="primary"
          offTrackColor="gray.500"
          offThumbColor="black"
        />
        <Text style={{ fontSize: 18, textAlign: "center" }}>Ligth</Text>
      </VStack>
      <Divider />
      <ScrollAnimatedHeader />
    </SafeAreaView>
  );
};

export default Profile;

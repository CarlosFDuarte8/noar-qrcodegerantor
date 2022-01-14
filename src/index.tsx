import * as React from "react";
import Constants from "expo-constants";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
// You can import from local files
import Routes from "./routes";
import QrCodeProvider from "./contexts/qrcode";

export default function Index() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <QrCodeProvider>
          <Routes />
        </QrCodeProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

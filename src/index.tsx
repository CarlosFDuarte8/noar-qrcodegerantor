import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
// You can import from local files
import Routes from "./routes";
import QrCodeProvider from "./contexts/qrcode";
import { AuthProvider } from "./contexts";

export default function Index() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <QrCodeProvider>
            <Routes />
          </QrCodeProvider>
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

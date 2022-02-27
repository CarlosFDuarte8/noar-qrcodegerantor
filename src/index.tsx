import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
// You can import from local files
import Routes from "./routes";
import QrCodeProvider from "./contexts/qrcode";
import { AuthProvider, DashboardProvider } from "./contexts";

export default function Index() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider>
          <AuthProvider>
            <DashboardProvider>
              <QrCodeProvider>
                <Routes />
              </QrCodeProvider>
            </DashboardProvider>
          </AuthProvider>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

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
import { Divider } from "native-base";
import FastImage from "react-native-fast-image";
import Gerator from "../../components/QRCode/Gerator";
import { ButtonQrCode, CreateQR, FabComponent } from "../../components";
import { useQrCode } from "../../contexts";

const QrCode = () => {
  const { loading, loadStoragedQrcodeData, qrCode } = useQrCode();
  const [showModal, setShowModal] = React.useState(false);
  console.log("QRCODE DATA: ", qrCode);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CreateQR isOpen={showModal} setShowModal={setShowModal} />
      
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => loadStoragedQrcodeData()}
          />
        }
      >
        <Gerator qrCode={qrCode} />
        <FabComponent onPlus={() => setShowModal(true)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default QrCode;

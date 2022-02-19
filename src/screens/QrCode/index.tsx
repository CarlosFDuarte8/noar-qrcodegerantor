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
import { ButtonQrCode, CreateQR } from "../../components";
import { useQrCode } from "../../contexts";

const QrCode = () => {
  const {loading, loadStoragedQrcodeData} = useQrCode();
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CreateQR isOpen={showModal} setShowModal={setShowModal} />
      <View style={{ flex: 0.1 }}>
        <ButtonQrCode />
      </View>
      <ScrollView style={{ flex: 0.9 }}  
      refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => loadStoragedQrcodeData()}
          />
        }
        >
        <Gerator />
      </ScrollView>
    </View>
  );
};

export default QrCode;

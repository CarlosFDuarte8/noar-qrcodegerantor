/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState, useEffect } from "react";

// const QrCodeContext = createContext();

type Props = {
  children: JSX.Element;
};

type QrCodeContextData = {
  loading: object | null;
  add: (item: any) => Promise<void>;
  qrCodeExists: (fragrance: any) => boolean;
  qrCode: Array<any>;
  remove: (id: number) => void;
  clearQrCode: () => void;
  loadStoragedQrcodeData?: () => Promise<void>;
};

const QrCodeContext = createContext<QrCodeContextData>({} as QrCodeContextData);

const QrCodeProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState([]);

  useEffect(() => {
    
    // loadStoragedQrcodeData();
    //   console.log('qrCode: ', qrCode);
    const start = async () => {
      const qrcodeData = await AsyncStorage.getItem("@RNApp:qrcodes");
      console.log("QRCODE DATA: ", qrcodeData);
      // setQrCode(qrcodeData)
    };
    start();
  }, []);

  async function add(item): Promise<void> {
    if (!qrCodeExists(item.name)) {
      setQrCode([...qrCode, item]);
      AsyncStorage.setItem("@RNApp:qrcodes", JSON.stringify(item));
    }
    
  }

  const qrCodeExists = (id): boolean => {
    for (const item of qrCode) {
      if (item?.id === id) {
        return true;
      }
    }
    return false;
  };

  function remove(id: number): void {
    const newQrCode = qrCode.filter((item) => item.id !== id);
    setQrCode(newQrCode);
  }

  const clearQrCode = (): void => {
    // if () {
    setQrCode([]);
    // }
  };

  async function loadStoragedQrcodeData() {
    setLoading(true)
    console.log("logando", loading);
    const storagedCapsule = await AsyncStorage.getItem("@RNApp:qrcodes");
    console.log("Dados Storage", storagedCapsule);
    alert(JSON.stringify(storagedCapsule));
    if (storagedCapsule) {
      setQrCode(JSON.parse(storagedCapsule));
    }
    setLoading(false);
    console.log("fim", loading);
  }

  const store = {
    loading,
    add,
    qrCodeExists,
    qrCode,
    remove,
    clearQrCode,
    loadStoragedQrcodeData,
  };

  return (
    <QrCodeContext.Provider value={store}>{children}</QrCodeContext.Provider>
  );
};

export function useQrCode() {
  const context = useContext(QrCodeContext);
  const {
    loading,
    add,
    qrCodeExists,
    qrCode,
    remove,
    clearQrCode,
    loadStoragedQrcodeData,
  } = context;

  return {
    loading,
    add,
    qrCodeExists,
    qrCode,
    remove,
    clearQrCode,
    loadStoragedQrcodeData,
  };
}

export default QrCodeProvider;

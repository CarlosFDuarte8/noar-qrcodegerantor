import { Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "native-base";
import * as React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CreateQR } from "../..";

export default function ButtonQrCode() {
  const [showModal, setShowModal] = React.useState(false);

  const buttonPlus = () => {
    Alert.alert("ok", "Plus");
  };
  const buttonExportPDF = () => {
    Alert.alert("ok", "Seu PDF será baixado em breve!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
        },
      },
    ]);
  };
  const valid = "Exporta PDF";
  const add = "Novo";
  const read = "Escanear";
  return (
    <View style={styles.container}>
      <View style={styles.flat}>
        <TouchableOpacity style={styles.pdf} onPress={() => buttonExportPDF()}>
          <Foundation name="page-export-pdf" size={34} color="white" />
          <Text style={styles.paragraph}>{valid}</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" mx="1" bg="white" />
        <TouchableOpacity
          style={styles.plus}
          onPress={() => setShowModal(true)}
        >
          <Feather name="plus-circle" size={34} color="white" />
          <Text style={styles.paragraph}>{add}</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" mx="1" bg="white" />
        <TouchableOpacity style={styles.pdf} onPress={() => buttonExportPDF()}>
          <MaterialCommunityIcons name="qrcode-scan" size={34} color="white" />
          <Text style={styles.paragraph}>{read}</Text>
        </TouchableOpacity>
      </View>
      <CreateQR isOpen={showModal} setShowModal={setShowModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  paragraph: {
    margin: 1,
    marginTop: 0,
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  logo: {
    height: 160,
    width: 160,
  },
  flat: {
    flex: 1,
    flexDirection: "row",
  },
  plus: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  pdf: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import { useQrCode } from "../../../contexts";
import { ImageQR } from "../../../components";

export default function Gerator() {
  const ref = React.useRef(null);
  const { qrCode, remove } = useQrCode();
  const [showModal, setShowModal] = React.useState(false);

  const [qrImage, setQrImage] = React.useState();
  const [qrName, setQrName] = React.useState();

  const _renderItem = (item, key) => {
    return (
      <View style={styles.container}>
        <Card>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
              setQrImage(
                item.customeCode + item.id + item.serialNumber + item.dueDate
              );
              setQrName(item.name);
            }}
          >
            <View style={styles.flat} key={key}>
              <View style={styles.flata}>
                <Text style={styles.paragraph}>Nome: {item.name}</Text>
                <Text style={styles.paragraph}>ID: {item.id}</Text>
                <Text style={styles.paragraph}>Codigo: {item.customeCode}</Text>
                <Text style={styles.paragraph}>
                  Nº. série: {item.serialNumber}
                </Text>
                <Text style={styles.paragraph}>Vencimento: {item.dueDate}</Text>
              </View>

              <View style={styles.flats}>
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      "https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=" +
                      item.customeCode +
                      item.id +
                      item.serialNumber +
                      item.dueDate,
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(" Excluir", item.id);
                    remove(item.id);
                  }}
                >
                  <Ionicons name="trash" size={25} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    console.log(" Excluir", item.id);
                    remove(item.id);
                  }}
                >
                  <Ionicons name="md-pencil" size={25} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
            {/* <Divider /> */}
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <>
      <ImageQR
        isOpen={showModal}
        setShowModal={setShowModal}
        imageQrcode={`https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=${qrImage}`}
        serialNumber={qrImage}
        name={qrName}
      />
      <FlatList
        data={qrCode}
        keyExtractor={(item, key) => `index-${key}`}
        renderItem={({ item, key }) => _renderItem(item, key)}
        ref={ref}
        // refreshControl={
        //   <RefreshControl refreshing={loading} onRefresh={start} />
        // }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 160,
    width: 160,
  },
  flat: {
    flexDirection: "row",
    marginBottom: 20,
  },
  flatss: {
    flexDirection: "row",
  },
  flata: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  flats: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

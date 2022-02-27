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
  FlatList,
} from "react-native";
import { Divider } from "native-base";
import FastImage from "react-native-fast-image";
import { Pie } from "../../components";
import { useDashboard } from "../../contexts";

const generateColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

const data = [
  {
    name: "Pos Barba",
    shot: 81,
    color: generateColor(),
    legendFontColor: "#000",
    legendFontSize: 15,
  },
  {
    name: "Pos Barba",
    shot: 81,
    color: generateColor(),
    legendFontColor: "#000",
    legendFontSize: 15,
  },
  {
    name: "Pos Barba",
    shot: 81,
    color: generateColor(),
    legendFontColor: "#000",
    legendFontSize: 15,
  },
];

const Home = () => {
  const { campaign, shotCampaign } = useDashboard();
  console.log("Dados Home:", shotCampaign);
  const ref = useRef(null);

  const _renderItem = (item, key) => {
    return (
      <View key={key}>
        <Text>{item.name}</Text>
        <Text>{item.series}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
        <View>
          <Text style={{ textAlign: "center" }}>{shotCampaign.campaignName}</Text>
        </View>
      <Divider my="2" />

      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ textAlign: "center" }}>Disparos por campanha</Text>
        </View>

        <Pie data={shotCampaign.fragrances} />
      </View>
      <Divider />
      <ScrollView style={{ flex: 3 }}>
        <Text style={{ textAlign: "center" }}>Disparos por fragrância</Text>
        <FlatList
          data={shotCampaign.fragrances}
          keyExtractor={(item, key) => `index-${key}`}
          renderItem={({ item, key }) => _renderItem(item, key)}
          ref={ref}
          // refreshControl={
          //   <RefreshControl refreshing={loading} onRefresh={start} />
          // }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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

const data = [{ id: 1, name: "Carlos" }];
const Home = () => {
  const ref = useRef(null);

  const _renderItem = (item, key) => {
    return (
      <View key={key}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1,  }}>
        <Text>Ola</Text>
      </ScrollView>
      <ScrollView style={{ flex: 2,  }}>
        <Text>Ola</Text>
        <FlatList
          data={data}
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

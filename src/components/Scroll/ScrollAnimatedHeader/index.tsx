import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");
const headerHeight = 300;
const headerFinalHeight = 70;
const imageSize = (headerHeight / 3) * 2;

const DATA = [
  { id: 1, name: "Sobre" },
  { id: 2, name: "Sobre" },
  { id: 2, name: "Sobre" },
];

export default function ScrollAnimatedHeader2() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  const offset = headerHeight - headerFinalHeight;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: "clamp",
  });
  const translateImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
    extrapolate: "clamp",
  });
  const translateImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
    ],
    extrapolate: "clamp",
  });
  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHeight],
    extrapolate: "clamp",
  });
  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight],
    extrapolate: "clamp",
  });
  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });
  const renderItem = ({ index, item }) => {
    if (index == 0){
      return (
        <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: translateHeader }] },
          ]}
        >
          <Animated.View
            style={[
              styles.image,
              {
                transform: [
                  { translateY: translateImageY },
                  { translateX: translateImageX },
                  { scale: scaleImage },
                ],
              },
            ]}
          >
            <Image
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D03AQGFoIZPPsihOQ/profile-displayphoto-shrink_400_400/0/1608565579402?e=1650499200&v=beta&t=beLCtiYL8w1q5Ge13mQcvvm2tvCfnP9de3Ue97FAMEs",
              }}
              style={styles.img}
              resizeMode="cover"
            />
          </Animated.View>
          <Animated.Text
            onTextLayout={(e) => setTextWidth(e.nativeEvent.lines[0].width)}
            style={[
              styles.name,
              {
                transform: [
                  { translateX: translateName },
                  { scale: scaleName },
                ],
              },
            ]}
          >
            Carlos Duarte
          </Animated.Text>
        </Animated.View>
      );}
    // {
    //   DATA.map((item) => {
        return (
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View>
        );
      
    // }
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: false,
        }
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    marginBottom: 5,
    backgroundColor: "#f2f2f2",
    marginHorizontal: 10,
  },
  header: {
    height: headerHeight,
    marginBottom: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: headerHeight,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: 30,
    color: "#000",
    position: "absolute",
    bottom: 0,
    height: headerFinalHeight,
    textAlignVertical: "center",
    letterSpacing: 2,
  },
});

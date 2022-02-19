import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text } from "react-native";

type TopNavigationParamsList = {
  Profile: undefined;
  QrCode: undefined;
};

interface Props {
  // navigation?: NativeStackNavigationProp<TopNavigationParamsList, "Profile">;
  navigation?: NativeStackNavigationProp<TopNavigationParamsList, "QrCode">;
  back?: any;
}

const HeaderLeft = ({ navigation, back = true }: Props) => {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <StatusBar
        animated={true}
        // color={'black'}
        backgroundColor={'white'}
        barStyle="dark-content"
        // hidden
        // translucent
        // networkActivityIndicatorVisible={true}
        showHideTransition={"slide"}
      />

      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: 'red'
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {back ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("QrCode")}
              // onPress={() => navigation.goBack()}
              style={{
                width: 40,
                alignItems: "center",
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={28} color="black" />
            </TouchableOpacity>
          ) : null}
          {/* <Image
            resizeMode="contain"
            style={{height: 45, width: 100}}
            source={require('../../../assets/images/logo.png')}
          /> */}
          <Text style={{height: "100%", width: 100, fontSize: 18}}>Duarte</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HeaderLeft;

/* eslint-disable react-native/no-inline-styles */
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View } from 'react-native';

type TopNavigationParamsList = {
  Profile: undefined;
};

interface Props {
  navigation: NativeStackNavigationProp<TopNavigationParamsList, 'Profile'>;
}

const HeaderRight = ({navigation}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 80,
        // backgroundColor: 'red',
      }}
    >
      
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 35,
        //   backgroundColor: 'red',
        }}
      >
        <View
          style={{flex: 1, marginRight: 20}}
        >
          
          <Ionicons name="cart" size={24} color={'black'} />
        </View>
        <View style={{flex: 1}}>
          <FontAwesome name="question-circle" size={24} color={'black'} />
          {/* <Example /> */}
        </View>
      </View>
    </View>
  );
};

export default HeaderRight;

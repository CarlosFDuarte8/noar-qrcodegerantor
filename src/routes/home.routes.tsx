import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HeaderLeft, HeaderRight} from '../components';
import {
  Home,
  QrCode,
} from '../screens';

const Stack = createNativeStackNavigator();

const App: React.FC = (props) => {
  const {colors, dark} = useTheme()

  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: dark ? dark : colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: '#fff',
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={false} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="QrCode"
        component={QrCode}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.white,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: '#fff',
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} back={false} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default App;

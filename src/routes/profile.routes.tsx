import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HeaderLeft, HeaderRight} from '../components';
import {
  Profile,
} from '../screens';

const Stack = createNativeStackNavigator();

const App: React.FC = (props) => {
  const colors = {
    primary: '#65AC1E',
    primaryDark: '#65AC1E',
    primaryLight: '#53FF34',
    white: '#FFF',
    darkBlue: '#054A96',
    accent: '#fff',
    background: '#fff',
    card: 'rgb(255, 255, 255)',
    text: '#222',
    textPrimary: 'rgb(20, 20, 20)',
    border: 'rgb(199, 199, 204)',
    input: '#f4f6f8',
    error: 'rgb(255, 45, 85)',
    placeholder: '#828285',
    icon: 'rgba(000, 000, 000, 0.5)',
    tag: 'rgba(200, 200, 200, 0.3)',
    navigationPrimary: '#770216',
    loader: 'rgb(200, 200, 200)',
  }

  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          title: 'Profile',
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

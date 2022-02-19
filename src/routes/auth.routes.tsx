import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
//Components
import {HeaderLeft} from '../components';
//Auth
import {
  SingIn
} from '../screens';



const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  const {colors} = useTheme();

  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SingIn"
        component={SingIn}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: '#fff',
          headerShown: false,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          // headerRight: () => <HeaderRight />,
        })}
      />

      

      {/* <Auth.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          headerTintColor: '#fff',
          headerShown: true,
          headerTransparent: false,
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          // headerRight: () => <HeaderRight />,
        })}
      /> */}
    </Auth.Navigator>
  );
};

export default AuthRoutes;

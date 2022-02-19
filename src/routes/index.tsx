

export default Routes;
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
//Auth
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes'
import { useAuth } from '../contexts';

const Routes: React.FC = () => {
  // const {colors} = useTheme();
  const {signed, refreshing} = useAuth();
  const colors = 
    {
      primary: '#0D0F59',
      blue: '#00A5FF'
    }

  if (refreshing) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color={colors.blue} />
        <Text style={{fontSize: 16, marginTop: 20}}>Carregando...</Text>
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes/>;
};

export default Routes;

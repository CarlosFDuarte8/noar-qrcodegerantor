import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// You can import from local files
import Index from './src';


export default function App() {
  return (
    <View style={styles.container}>
        <Index />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 0,
  },
});

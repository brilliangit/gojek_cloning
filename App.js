import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/components/molecule/Tabs';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Tabs />
      <View style={styles.container}>
        <Text>content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default App;

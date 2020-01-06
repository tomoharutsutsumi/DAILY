import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import newDone from './components/newDone'
import doneList from './components/doneList'

export default function App() {
  const MainNavigator = createAppContainer(
    createSwitchNavigator({
      newDone: {screen: newDone},
      doneList: {screen: doneList}
    })
  )

  return (
    <View style={styles.container}>
      <MainNavigator/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

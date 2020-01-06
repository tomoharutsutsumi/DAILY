import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class newDone extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>投稿画面</Text>
        <Button 
          title="やったことリストへ"
          onPress={() => {this.props.navigation.navigate('doneList')}}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

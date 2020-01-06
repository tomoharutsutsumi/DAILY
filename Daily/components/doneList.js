import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class doneList extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>やったことリスト</Text>
        <Button 
          title="投稿画面へ"
          onPress={() => {this.props.navigation.navigate('newDone')}}>
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

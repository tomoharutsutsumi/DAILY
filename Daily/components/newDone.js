import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class newDone extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  
  changeTextStatus(e){
    this.setState({text: e})
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text>投稿画面</Text>
        <Button 
          title="やったことリストへ"
          onPress={() => {this.props.navigation.navigate('doneList')}}>
        </Button>
        <TextInput 
          style={styles.text}
          onChange={(e) => {this.changeTextStatus(e)}}>
        </TextInput>
        <Button title="投稿する"></Button>
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
  text: {
    width: 100,
    height: 30,
    borderWidth: 1, 
  }
});

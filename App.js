import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count from './Count';


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Count count={Date.now()}/>
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
  bigText: {
    fontSize: 100
  }
});

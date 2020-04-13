import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LogIn />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.myButton}>
          <View>
            <Text style={styles.textDesign}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myButton: {
    padding: 5,
    height: 45,
    width: 350,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'purple',
    marginTop: 150,
  },
  textDesign: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 5,
    fontWeight: '700',
  },
});

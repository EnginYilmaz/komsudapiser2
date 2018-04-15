import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, Alert, AppRegistry } from 'react-native';
import MapView from 'react-native-maps';
//import Lokasyon from './Lokasyon.js';
import Fetchdata from './Fetchdata.js';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Ekran extends Component {
  render() {
    return (
      <View style ={styles.container}>
        <Fetchdata />
      </View>
    );
  }
}

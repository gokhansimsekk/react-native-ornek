/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import List from './src/components/List';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Anasayfa'} />
        <List />
      </View>
    );
  }
}
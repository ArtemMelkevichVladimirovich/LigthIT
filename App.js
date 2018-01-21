/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import LoginContainer from './src/components/container/login/LoginContainer';
//import RegisterContainer from './src/components/container/register/RegisterContainer';
import ListProductContainer from './src/components/container/listproduct/ListProductContainer';

export default class App extends Component {
  render() {
    return (
      <ListProductContainer />
    );
  }
}

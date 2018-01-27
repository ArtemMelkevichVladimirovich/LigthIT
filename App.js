/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MyApp from './src/components/container/main';
import { Provider } from 'react-native';
import store from './src/store/store';
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <MyApp />
            </Provider>
        );
    }
}


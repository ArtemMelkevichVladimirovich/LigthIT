import React, { Component } from 'react';
import List from './login/LoginContainer';
import Product from './productaddinfo/ProductContainer';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="page1" component={List} initial/>
                    <Scene key="page2" component={Product}  />
                </Scene>
            </Router>
        )
    }
}

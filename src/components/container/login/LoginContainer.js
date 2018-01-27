import React, { Component } from 'react';
import LoginPresentational from './LoginPresentational';
import { View } from 'react-native';

const listProduct = {};
class LoginContainer extends Component {

   

    constructor() {
        super();
    }


    render() {
        return (
            <LoginPresentational />
        );
    }
}

export default LoginContainer;
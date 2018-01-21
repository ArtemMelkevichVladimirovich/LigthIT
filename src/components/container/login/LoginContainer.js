import React, { Component } from 'react';
import LoginPresentational from './LoginPresentational';
import { View } from 'react-native';

class LoginContainer extends Component {
    render() {
        return (
            <LoginPresentational />
        );
    }
}

export default LoginContainer;
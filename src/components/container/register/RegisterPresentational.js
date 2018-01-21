import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './RegisterStyles';

const LoginPresentational = () => (

    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput style={styles.field} placeholder='New username' />
            <TextInput style={styles.field} placeholder='Password' />
            <TextInput style={styles.field} placeholder='Confirm password' />
            <TouchableOpacity style={styles.button}>
                <Text> Register</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default LoginPresentational;
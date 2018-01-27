import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './LoginStyles';

const LoginPresentational = () => (

    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput style={styles.field} placeholder='Username' />
            <TextInput
                style={styles.field} placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text> Sing in</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flex: 0.09 }}>
            <Text> Did you register?  </Text>
        </TouchableOpacity>
    </View>
)

export default LoginPresentational;
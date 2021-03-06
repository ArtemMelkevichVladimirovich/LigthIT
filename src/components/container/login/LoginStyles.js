import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7C00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FFB773',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#6BE400',
        padding: 15,
        borderRadius: 1000,
        marginBottom: 150,
    },
    form: {
        marginTop: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
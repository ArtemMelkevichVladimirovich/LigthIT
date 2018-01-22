import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ScrollView,
} from 'react-native';
import styles from './ListProductStyles';

const ListProductPresentational = () => (

    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.button}>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
            <Text style={styles.text}> React Native</Text>
        </View>
        <View style={styles.button}>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
            <Text style={styles.text}> React Native</Text>
        </View>
        <View style={styles.button}>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
            <Text style={styles.text}> React Native</Text>
        </View>
        <View style={styles.button}>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
            <Text style={styles.text}> React Native</Text>
        </View>
        <View style={styles.button}>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
            <Text style={styles.text}> React Native</Text>
        </View>
    </ScrollView>
)

export default ListProductPresentational;
import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ListView,
} from 'react-native';
import styles from './ListProductStyles';

const ListProductPresentational = () => (

    <View style={styles.container}>
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
            />
            <Text style={styles.text}> Samsung</Text>
        </TouchableOpacity>
    </View>
)

export default ListProductPresentational;
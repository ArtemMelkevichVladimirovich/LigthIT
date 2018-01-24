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


const ListProductPresentational = (name) => (
    <View style={styles.button}>
        <Image
            source={{ uri: `http://smktesting.herokuapp.com/static/${name.name.img}` }}
            style={styles.img} />
        <Text style={styles.text}>{name.name.title}</Text>
    </View>
)

export default ListProductPresentational;
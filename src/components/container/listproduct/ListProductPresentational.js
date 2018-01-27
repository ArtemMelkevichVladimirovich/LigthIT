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
    <ScrollView>
        {
            name.name.map((item, index) => {
                return (
                    <View key={index}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: `http://smktesting.herokuapp.com/static/${item.img}` }}
                                style={styles.img} />
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
    </ScrollView>
)

export default ListProductPresentational;
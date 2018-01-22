import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    Button
} from 'react-native';
import styles from './ProductStyles';

const ProductPresentational = () => (

    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoProduct}>
            <Text style={styles.text}> React Native</Text>
            <Image
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                style={styles.img}
            />
        </View>

        <View style={styles.form}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 1, padding: 10 }}> Give Feedback:</Text>
                <Button style={{ padding: 10 }} title='Send' />
            </View>
            <TextInput style={{ marginLeft: 20, marginRight: 10 }} placeholder='Text...' />

        </View>

        <View style={styles.containerProduct}>
            <Text> User: Artem </Text>
            <Text> Date: 20.12.2017</Text>
            <Text> Rote: 5</Text>
            <Text style={styles.text}> Comment:  Hello! I want bay telephone my mami </Text>
        </View>
        <View style={styles.containerProduct}>
            <Text> User: Artem </Text>
            <Text> Date: 20.12.2017</Text>
            <Text> Rote: 5</Text>
            <Text style={styles.text}> Comment:  Hello! I want bay telephone my mami </Text>
        </View>
        <View style={styles.containerProduct}>
            <Text> User: Artem </Text>
            <Text> Date: 20.12.2017</Text>
            <Text> Rote: 5</Text>
            <Text style={styles.text}> Comment:  Hello! I want bay telephone my mami </Text>
        </View>
        <View style={styles.containerProduct}>
            <Text> User: Artem </Text>
            <Text> Date: 20.12.2017</Text>
            <Text> Rote: 5</Text>
            <Text style={styles.text}> Comment:  Hello! I want bay telephone my mami </Text>
        </View>
    </ScrollView>

)

export default ProductPresentational;
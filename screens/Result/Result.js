import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Result = (props) => {
    return (
        <View style={styles.container}>
            <View>
            <Text>This is result</Text>
            </View>
            <View style={styles.imageContainer}>
            <Image source={require('../../assets/gemini.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity  style={styles.buttons} onPress={() => props.navigation.navigate('HomeScreen')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;

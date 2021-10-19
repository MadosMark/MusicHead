import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'




const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/gemini.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
                 <Title />
            <TouchableOpacity>
                <Text style={styles.text}>Enter Here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

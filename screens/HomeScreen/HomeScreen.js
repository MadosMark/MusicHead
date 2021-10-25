import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'





const HomeScreen = (props) => {
    
    return (
        <View style={styles.container}>
                <Title />
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/waves.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Quiz")}>
                <Text style={styles.buttonText}>Enter Here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

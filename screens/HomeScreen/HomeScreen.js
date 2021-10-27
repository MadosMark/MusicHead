import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import Title from '../../components/Title'
import styles from './styles';
import NeumorphismButton from '../../components/NeumoprhismButton';

const HomeScreen = (props) => {

    
    return (
        <View style={styles.container}>
                <NeumorphismButton>
                <Title />
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/waves.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            </NeumorphismButton>
            
            <NeumorphismButton onPress={() => props.navigation.navigate("Quiz")}>
                <Text>Enter Here</Text>
            </NeumorphismButton>
            
        </View>
    )
}

export default HomeScreen;

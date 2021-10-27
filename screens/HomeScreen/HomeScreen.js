import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import Title from '../../components/Title'
import styles from './styles';
import NeumorphisButton from '../../components/neuPhorButton';
import NeumorphismButton from '../../components/neuPhorButton';

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
            

            <NeumorphisButton>
               
            <TouchableOpacity onPress={() => props.navigation.navigate("Quiz")}>
                <Text >Enter Here</Text>
            </TouchableOpacity>
            </NeumorphisButton>
            
        </View>
    )
}

export default HomeScreen;

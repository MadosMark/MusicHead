import React from 'react'
import { Image, View, Text } from 'react-native'
import Title from '../../components/Title'
import styles from './styles';
import Vinyl from '../../components/Vinyl';
import NeumorphismButton from '../../components/NeumorphismButton';
import NeumorphismStyle from '../../components/NeumorphismStyle';





const HomeScreen = (props) => {

    
    return (
        <View style={styles.container}>
            <NeumorphismStyle>
            <View>
                <Title />
            </View>
            </NeumorphismStyle>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/waves.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            
            
            <NeumorphismButton onPress={() => props.navigation.navigate("Quiz")}>
                <Text style={{
                    color: '#F0F3F4',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.9,
                    shadowColor: "black",
                    shadowRadius: 0.8,
                }}>Enter Here</Text>
            </NeumorphismButton>
        </View>
            
    )
}

export default HomeScreen;

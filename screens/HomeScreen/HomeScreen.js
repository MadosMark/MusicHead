import React, {useState} from 'react'
import { Image, View, Text, Animated } from 'react-native'
import styles from './styles';
import NeumorphButtonHome from '../../components/NeumorphButtonHome';


const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View>
            <Text style={{
                fontFamily: 'Anurati',
                fontSize: 50,
                color: '#dedede',
                opacity: 1,
                shadowOffset: {width: -1, height: -0},
                shadowColor: '#000',
                shadowOpacity: 0.8,
                shadowRadius: 0.9,
                
            }}>MUSIC HEAD</Text>
            </View>


            <View style={styles.imageContainer}>
                <Image source={require('../../assets/waves.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            
            <NeumorphButtonHome onPress={() => props.navigation.navigate("Quiz")}>
         
                <Text style={{
                    color: '#dedede',
                    fontFamily: 'Anurati',
                    fontSize: 30,
                    shadowOffset: {width: -1, height: -0},
                    shadowColor: '#000',
                    shadowOpacity: 0.7,
                    shadowRadius: 0.8,
                }}>ENTER HERE</Text>
                
            </NeumorphButtonHome>
            
        </View>
            
    )
}

export default HomeScreen;

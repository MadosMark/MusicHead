import React, { useState } from 'react'
import { Animated, StyleSheet, View, Text, Easing } from 'react-native'
import NeumorphismButton from './NeumorphismButton'

import { Audio } from 'expo-av';

const Vinyl = () => {
    let rotateValueHolder = new Animated.Value(0)
    const [sound, setSound] = useState(null);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../music/manOnTheMoon.mp3')
        );

        // console.log('sound', sound);

        setSound(sound);
        
        console.log('Playing Sound');
        await sound.playAsync();

    }

    const onStartVinylAnimation = () => {
        console.log('starting_loop_initial');
        rotateValueHolder.setValue(0);

        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 11500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            console.log('starting_loop');
        })
       }


       React.useEffect(() => {
           if (sound) {
               onStartVinylAnimation();
           } else {
               console.log('no_sound');
           }
       }, [sound]);

    React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
   
    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.Vinylcontainer}>
            <Animated.Image
            source={require('../assets/vinyl.png')}
            style={[styles.vinyl,
            {transform: [{rotate: RotateData}]}]}
            />
            <NeumorphismButton
            onPress={playSound}>
                <Text>Listen</Text>
            </NeumorphismButton>
        </View>
    )
}

const styles = StyleSheet.create({
    Vinylcontainer: {
        alignItems: 'center'
    },
    vinyl:{
        width: 200,
        height: 200,
        margin: 5,
    }
})


export default Vinyl;
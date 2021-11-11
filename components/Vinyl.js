import React, { useState } from 'react'
import { Animated, StyleSheet, View, Text, Easing } from 'react-native'
import NeumorphismButton from './NeumorphismButton'
import { Audio } from 'expo-av';
import { render } from 'react-dom';

function RenderTitle({title}) {
    // console.log('title_props', props.title);

    // const {
    //     first_name,
    //     last_name,
    //     age,
    // } = props;

    return (
        <>
        <Text>{title}</Text>
        {/* <Text>{last_name}</Text>
        <Text>{age}</Text> */}
        </>
    )
}

const Vinyl = (props) => {
    const {
        song,
        vinylImage,
    } = props;

    let rotateValueHolder = new Animated.Value(0)
    const [sound, setSound] = useState(null);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(props.song);

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
            {/* <RenderTitle title="hehehe" /> */}
            <Animated.Image
            source={vinylImage || require("../assets/vinyl2.png")}
            style={[
                styles.vinyl,
                {transform: [{rotate: RotateData}]}
            ]}
            />
            <NeumorphismButton onPress={() => {
                if (props.song) {
                    playSound();
                }
            }}>
                <Text>Listen</Text>
            </NeumorphismButton>
        </View>
    )
}

const styles = StyleSheet.create({
    Vinylcontainer: {
        alignItems: 'center',
        borderRadius: 2,
        
    },
    vinyl:{
        width: 200,
        height: 200,
        marginBottom: 5,
        borderRadius: 150,
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
        
        
    }
})


export default Vinyl;
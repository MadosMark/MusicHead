import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'







const Vinyl = () => {

    return (
        <View style={styles.Vinylcontainer}>
            <Image
            source={require('../assets/vinyl.png')}
            style={styles.vinyl} 
            />
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
       
    }
    
})


export default Vinyl;
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Title = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.text}>Music Head</Text>
        </View>
    )
}

const styles = StyleSheet.create({
title: {
    margin: 15,
},
text: {
    fontSize: 45,
    color: '#F0F3F4',
    shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.6,
        shadowColor: "black",
        shadowRadius: 1,
}
})

export default Title;

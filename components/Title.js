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
    fontSize: 25,
}
})

export default Title;

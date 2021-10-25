import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        width: '50%',
        backgroundColor: '#fff',
        padding: 20,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowColor: "black",
        shadowRadius: 1,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
       color: '#fff',
       fontSize: 20,
       shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowColor: "black",
        shadowRadius: 1,

    },
    image: {
        height: 150,
        width: 150,
        margin: 30,
        opacity: 0.8,
    },
    imageContainer: {
     justifyContent: 'center',
     alignItems: 'center',
    },
    
});


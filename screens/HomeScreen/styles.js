import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dedede',
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowColor: "black",
        shadowRadius: 2,
        width: '35%',
        height: '5%',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 15,

    },
    buttonText: {
       color: '#F0F3F4',
       fontSize: 18,
       shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.7,
        shadowColor: "black",
        shadowRadius: 1,

    },
    image: {
        height: 150,
        width: 150,
        margin: 35,
        opacity: 0.8,
    },
    imageContainer: {
     justifyContent: 'center',
     alignItems: 'center',
    },
    

});

export default styles;
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    },
    imageContainer: {
     justifyContent: 'center',
     alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttons: {
        width: '50%',
        backgroundColor: '#eee',
        padding: 20,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 1,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

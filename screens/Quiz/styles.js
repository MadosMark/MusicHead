import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    
    quizContainer: {
    padding: 70,
    height: '100%',
    backgroundColor: '#fff'
    },
    question: {
        marginTop: 60,
        marginVertical: 16,
        alignItems: 'center',
        
    },
    questionText: {
        fontSize: 25,
        textAlign: 'center',

    },
    options: {
        alignItems: 'baseline',
        justifyContent: 'center',
        marginVertical: 16,
        flex: 1,
        marginTop: 150,
        
    },
    option: {
        fontSize: 16,
    },
    buttonsContainer: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 8,
        backgroundColor: '#eee',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 1,
    

    },
    buttons: {
    backgroundColor: '#eee',
    padding: 20,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowColor: "grey",
    shadowRadius: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    }
});

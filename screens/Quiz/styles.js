import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    
    quizContainer: {
    padding: 0,
    backgroundColor: '#dedede',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
    
    },

    question: {
    marginTop: 60,
    marginVertical: 16,
    alignItems: 'center',
        
    },
    questionText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    color: '#F0F3F4',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: "black",
    shadowRadius: 1,

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
        color: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowColor: "black",
    shadowRadius: 1,
    
        
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
        // backgroundColor: '#eee',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        
    

    },
    buttons: {
    // backgroundColor: '#FFF',
    padding: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowRadius: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    },

    giveUpButton: {
    backgroundColor: '#FFF',
    padding: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowColor: "black",
    shadowRadius: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    width: '50%',
    },

    giveUpText: {
    color: '#F0F3F4',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowColor: "black",
    shadowRadius: 0.8,
    },

    nextButton: {
    backgroundColor: '#FFF',
    padding: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowRadius: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    
    },

    nextButtonText: {
        color: '#F0F3F4',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.9,
        shadowColor: "black",
        shadowRadius: 0.8,
        fontSize: 20,
        textAlign: 'center',

    },
    

});

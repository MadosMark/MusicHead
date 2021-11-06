import React, { useState } from 'react'
import { View, Text, Image, Modal, Animated } from 'react-native'
import styles from './styles'
import data from '../../data/QuizData';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import NeumorphismButton from '../../components/NeumorphismButton';
import NeumorphismStyle from '../../components/NeumorphismStyle';
import Vinyl from '../../components/Vinyl';







const Quiz = (props) => {

    const Questions = data;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [ifOptionDisabled, setifOptionDisabled] = useState(false);
    const [result, setResult] = useState(0)
    const [displayNextButton, setDisplayNextButton] = useState(false)
    const [displayShowModal, setdisplayShowModal] = useState(false)

    const [isAnswered, setIsAnswered] = useState(false)
    
    

    
    
    
const checkAnswer = (selectedOption) => {
    let correct_option = Questions[currentQuestion]['correct_option'];
    setOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setifOptionDisabled(true);
    if(selectedOption==correct_option){
        setResult(result+1)
    }
    setDisplayNextButton(true)

    setIsAnswered(true);
}
    
 

    const nextQuestion = () => {
        if(currentQuestion== Questions.length-1){
            setdisplayShowModal(true)
          
        }else{
            setCurrentQuestion(currentQuestion+1);
            setOptionSelected(null);
            setCorrectOption(null);
            setifOptionDisabled(false);
            setDisplayNextButton(false);
            setIsAnswered(false);
            
            
        }
        Animated.timing(progress, {
            toValue: currentQuestion+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    
    const restartQuiz= () => {
     setdisplayShowModal(false);

     setCurrentQuestion(0);
     setResult(0);
     setOptionSelected(null);
     setCorrectOption(null);
     setifOptionDisabled(false);
     setDisplayNextButton(false);
     setIsAnswered(false);
     Animated.timing(progress, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
    }).start();


 }

    const displayQuestionCounter = () => {
        return (
        <View>
            <View style={{
                flexDirection: 'row',
                marginBottom: 15,
                
            }}>
                <Text style={{
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.8,
                    shadowColor: "black",
                    shadowRadius: 1,
                    color: '#fff',
                    fontSize: 18,
                    
                }}>{currentQuestion+1}</Text>
                <Text style={{
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.8,
                    shadowColor: "black",
                    shadowRadius: 1,
                    color: '#fff',
                    fontSize: 18,
                }}> / {Questions.length}</Text>
            </View>
        </View>

        )
    }

    const displayQuestion = () => {
        return (
        <NeumorphismStyle>
        <View style={{
            width: '100%',
            
        }}>
        <Text style={styles.questionText}>{Questions[currentQuestion]?.question}</Text>
        </View>
        </NeumorphismStyle>

        )
    }

    const DisplayImage = () => {
        if(Questions[currentQuestion]?.pic){
        return (
            <View style={{
                width: 200,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 12,
                shadowOffset: {width: 12, height: 12},
                shadowColor: '#bababa',
                shadowOpacity: 1.0,
                shadowRadius: 18,
            }}> 
            
            <Image 
            source={Questions[currentQuestion]?.pic}
            style={{
                width: 110, 
                height: 110,
                borderRadius: 20,
                resizeMode: 'cover',
                backgroundColor: '#000'
                }}/> 
                
            </View>
        ) 
    } else {
        return null;
        }
    }

    const DisplaySong = () => {
        if(Questions[currentQuestion]?.song){
        return (
            <View style={{
                width: 200,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 90,
                shadowOffset: {width: 12, height: 12},
                shadowColor: '#bababa',
                shadowOpacity: 1.0,
                shadowRadius: 18,
            }}> 
            
            <Vinyl />
                
            </View>
        ) 
    } else {
        return null;
        }
    }
    

    const displayOption = () => {
        return (
            <View style={{
                paddingVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                

                }}>
                {
                    Questions[currentQuestion]?.options.map(option => (
                        
                        
                <NeumorphismButton
                onPress={()=> checkAnswer(option)}
                disabled={ifOptionDisabled}
                key={option}
                style={[
                    isAnswered && option === optionSelected ? {
                        borderWidth: 1,
                        borderColor: option === correctOption ? '#8bc901' : 'red'
                    } : {},
                    {
                    height: 50, 
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: 330,                    
                }]}
                >
                 <Text style= {{ color: '#000', textAlign: 'center',}}>{option}</Text>
                   {
                    isAnswered && option === optionSelected ? (
                        <View style={{
                            width: 30, height: 30, 
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            {
                                option === correctOption ? (
                                    <MaterialCommunityIcons name="check" style={{
                                        color: '#8bc901',
                                        fontSize: 20
                                    }} />
                                ) : (
                                <MaterialCommunityIcons name="close" style={{
                                    color: 'red',
                                    fontSize: 20
                                }} /> )
                            }
                        </View>
                    ) : null
                    
                    
                    // option == optionSelected ? (
                    //     <View style={{
                    //         width: 30, height: 30,
                    //         alignItems: 'center',
                    //         flexDirection: 'row'
                    //     }}>
                    //         <MaterialCommunityIcons name="close" style={{
                    //             color: 'red',
                    //             fontSize: 20
                    //         }} />
                    //     </View>
                    // ) : null
    
                    }
                </NeumorphismButton>
                
                
                ))
                }
            </View>
        )
    }
    
    
    

    const nextButton = () => {
      if(displayNextButton){
          return(
              
              <NeumorphismButton
              onPress={nextQuestion}
              style={{
                  width: 150,
                  alignItems: 'center',
                  justifyContent: 'center', 
                  
              }}
              
            >
                <Text style={styles.nextButtonText}>Next</Text>
              </NeumorphismButton>
              
              
          )

      } else {
          return null;
      }
    }

    const giveUpButton = () => {
        return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            
        }}>
        <NeumorphismButton
        onPress={() => props.navigation.navigate("HomeScreen")}
        >
            <Text style={
                styles.giveUpText
            }> Give Up </Text>
        </NeumorphismButton>
        </View>
        )
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progessAnimation = progress.interpolate({
        inputRange: [0, Questions.length],
        outputRange: ['0%','100%']
    })
    const displayProgressBar = () => {
        return (
            <View style={{
                width: '85%',
                height: 5,
                borderRadius: 25,
                backgroundColor: '#00000020',
                marginBottom: 20,

            }}>
                <Animated.View style={[{
                    height: 5,
                    borderRadius: 25,
                    backgroundColor: 'red',
                },{
                    width: progessAnimation
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
        <View style={styles.quizContainer}>
       
            {displayProgressBar()}
            
            {displayQuestionCounter()}
            {displayQuestion()}
            {DisplaySong()}
            {DisplayImage()}
            {displayOption()}
            {nextButton()}
            
            
            <Modal
            animationType="fade"
            transparent={true}
            visible={displayShowModal}>
                
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#dedede',
                }}> 
                    <View style={{
                        backgroundColor: '#dedede',
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center',
                    }}> 
                    <NeumorphismStyle>
                    <View>

                        <Text style={{
                            textAlign: 'center',
                            fontSize: 35, 
                            fontWeight: 'bold',
                            color: '#F0F3F4',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.7,
                            shadowColor: "black",
                            shadowRadius: 0.8,
                            paddingVertical: 45,
                            }}> 
                            { result> (Questions.length/2) ? 'You are definitely a Music Head!' : 'You should study more my dude!' }
                            </Text>

                            </View>
                            </NeumorphismStyle>
                            
                            
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20,
                            padding: 30,
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: '#F0F3F4',
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.8,
                                shadowColor: "black",
                                shadowRadius: 0.8,
                            }}>{result} </Text>
                            <Text style={{
                                    fontSize: 25,
                                    color: '#F0F3F4',
                                    shadowOffset: {width: 0, height: 2},
                                    shadowOpacity: 0.8,
                                    shadowColor: "black",
                                    shadowRadius: 0.8,
                                }}>/ { Questions.length }</Text>
                        </View>
                        
                        <View>
                        <NeumorphismButton
                        onPress={restartQuiz}
                        style= {{
                            
                            
                            
                        }}>
                            <Text style={{
                                color: '#F0F3F4',
                                fontSize: 20,
                                shadowOffset: {width: 0, height: 1},
                                shadowOpacity: 0.8,
                                shadowColor: "black",
                                shadowRadius: 1,
                                textAlign: 'center',
                            }}>Retry Quiz</Text>
                        </NeumorphismButton>
                        {giveUpButton()}
                        </View>
                            
                    </View>

                </View>
               

            </Modal>

            
            </View>
            
            
      
    )
}

export default Quiz;

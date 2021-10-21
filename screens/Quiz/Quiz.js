import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, Animated } from 'react-native'
import styles from './styles'
import data from '../../data/QuizData';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';



const Quiz = (props) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)



    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }
 const restartQuiz= () => {
     setShowScoreModal(false);

     setCurrentQuestionIndex(0);
     setScore(0);
     setCurrentOptionSelected(null);
     setCorrectOption(null);
     setIsOptionsDisabled(false);
     setShowNextButton(false);


 }

    const renderQuestion = () => {
        return (
        <View>
            {/* Question Counter */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text>{currentQuestionIndex+1}</Text>
                <Text>/{allQuestions.length}</Text>
            </View>
        

        {/* Question */}
        <Text style={{
            fontSize: 25
        }}>{allQuestions[currentQuestionIndex]?.question}</Text>
        </View>

        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                allQuestions[currentQuestionIndex]?.options.map(option => (
                <TouchableOpacity
                onPress={()=> validateAnswer(option)}
                disabled={isOptionsDisabled}
                key={option}
                style={{
                    
                    borderWidth: 3,
                    backgroundColor: '#098',
                    height: 60, borderRadius: 20,
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    marginVertical: 10,
                }}
                >
                 <Text style= {{ color: '#fff'}}>{option}</Text>
                
                   {
                    option==correctOption ? (
                        <View style={{
                            width: 30, height: 30, borderRadius: 30/2,
                            backgroundColor: '#fff',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name="check" style={{
                                color: '#000',
                                fontSize: 20
                            }} />
                        </View>
                    ): option == currentOptionSelected ? (
                        <View style={{
                            width: 30, height: 30, borderRadius: 30/2,
                            backgroundColor: 'red',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name="close" style={{
                                color: '#fff',
                                fontSize: 20
                            }} />
                        </View>
                    ) : null

                    }
                </TouchableOpacity>
                ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
      if(showNextButton){
          return(
              <TouchableOpacity
              onPress={handleNext} 
              style={{
                  marginTop: 20, width: '100%', padding: 20, borderRadius: 15,
              }}>
                  <Text style={{
                      color: '#fff', backgroundColor: '#955',textAlign: 'center',
                  }}>Next</Text>
              </TouchableOpacity>
          )

      } else {
          return null;
      }
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
        <View style={styles.quizContainer}>
            {renderQuestion()}
            {renderOptions()}
            {renderNextButton()}
            <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#744',
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center',
                    }}>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20,
                        }}>
                            <Text>{score} </Text>
                            <Text style={{
                                    fontSize: 12, color: '#000'
                                }}>/ { allQuestions.length }</Text>
                        </View>
                        <TouchableOpacity
                        onPress={restartQuiz}>
                            <Text>Retry Quiz</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>

            {/* <View style={styles.question}>
                <Text style={styles.questionText}>Why?</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttons}>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View> */}
            </View>
            </SafeAreaView>
            
      
    )
}

export default Quiz;

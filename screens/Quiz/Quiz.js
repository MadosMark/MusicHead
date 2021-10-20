import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import data from '../../data/QuizData';
import { SafeAreaView } from 'react-native-safe-area-context';




const Quiz = (props) => {

    const allQuestions = data;
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)


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
                <TouchableOpacity>
                <Text>{option}</Text>
                </TouchableOpacity>
                    )
                    )
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
        <View style={styles.quizContainer}>
            {renderQuestion()}
            {renderOptions()}
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

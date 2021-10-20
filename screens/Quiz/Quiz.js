import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import { useState } from 'react'



const Quiz = (props) => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz = async()=> {
      const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
      const res = await fetch(url);
      const data = await res.json();
      setQuestions(data.results);
      
      
      
    };
    useEffect(()=>{
        getQuiz()
    }, []);

    return (
        <View style={styles.quizContainer}>
         
            <View style={styles.question}>
                <Text style={styles.questionText}>This is a really cool question?</Text>
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
            </View>
            </View>
            
      
    )
}

export default Quiz;

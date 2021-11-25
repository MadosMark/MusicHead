import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, Text, Image, Modal, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Video } from "expo-av";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

import NeumorphismButton from "../../components/NeumorphismButton";
import NeumorphismStyle from "../../components/NeumorphismStyle";
import Vinyl from "../../components/Vinyl";
import api from "../../api/api";

import styles from "./QuizScreen.styles";

const QuizScreen = (props) => {
  const rounds = {
    level1: api.slice(0, 10),
    level2: api.slice(10, 20),
    level3: api.slice(20, 30),
  };

  const [currentRound, setCurrentRound] = useState({
    data: rounds.level1,
    level: 1,
  });

  const [currentRoundResults, setCurrentRoundResults] = useState(null);

  const [totalResult, setTotalResults] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [ifOptionDisabled, setifOptionDisabled] = useState(false);

  const [displayNextButton, setDisplayNextButton] = useState(false);
  const [displayShowModal, setdisplayShowModal] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progessAnimation = progress.interpolate({
    inputRange: [0, currentRound.data.length],
    outputRange: ["0%", "100%"],
  });

  const checkAnswer = (selectedOption) => {
    let correct_option = currentRound.data[currentQuestion]["correct_option"];
    setOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setifOptionDisabled(true);
    if (selectedOption == correct_option) {
      setCurrentRoundResults(currentRoundResults + 1);
    }
    setDisplayNextButton(true);

    setIsAnswered(true);
    setMusicHasStopped(true);
    setVideoHasStopped(true);
  };

  const nextQuestion = () => {
    if (currentQuestion == currentRound.data.length - 1) {
      setdisplayShowModal(true);
      setTotalResults(totalResult + currentRoundResults);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setOptionSelected(null);
      setCorrectOption(null);
      setifOptionDisabled(false);
      setDisplayNextButton(false);
      setIsAnswered(false);
      setMusicHasStopped(false);
      setVideoHasStopped(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestion + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setdisplayShowModal(false);

    setCurrentQuestion(0);
    setCurrentRoundResults(0);
    setOptionSelected(null);
    setCorrectOption(null);
    setifOptionDisabled(false);
    setDisplayNextButton(false);
    setIsAnswered(false);
    setCurrentRound({
      data: rounds.level1,
      level: 1,
    });

    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const displayQuestionCounter = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#d0d3d4",
              fontFamily: "Anurati",
              fontSize: 18,
              shadowOffset: { width: -0.4, height: 0.8 },
              shadowColor: "#000",
              shadowOpacity: 1,
              shadowRadius: 0.5,
            }}
          >
            {currentQuestion + 1}
          </Text>
          <Text
            style={{
              color: "#d0d3d4",
              fontFamily: "Anurati",
              fontSize: 18,
              shadowOffset: { width: -0.4, height: 0.8 },
              shadowColor: "#000",
              shadowOpacity: 1,
              shadowRadius: 0.5,
            }}
          >
            {" "}
            - {currentRound.data.length}
          </Text>
        </View>
      </View>
    );
  };

  const displayQuestion = () => {
    return (
      <NeumorphismStyle
        style={{
          width: 330,
        }}
      >
        <Text numberOfLines={3} style={styles.questionText}>
          {currentRound.data[currentQuestion]?.question}
        </Text>
      </NeumorphismStyle>
    );
  };

  const DisplayImage = () => {
    if (currentRound.data[currentQuestion]?.pic) {
      return (
        <View
          style={{
            marginTop: 10,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "#000",
            shadowOpacity: 0.4,
            shadowRadius: 2,
            marginBottom: 15,
          }}
        >
          <Image
            source={currentRound.data[currentQuestion]?.pic}
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              resizeMode: "cover",
              marginVertical: 20,
              backgroundColor: "#e1e4e8",
            }}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  const [videoHasStopped, setVideoHasStopped] = useState(false);
  const DisplayVideo = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    if (currentRound.data[currentQuestion]?.video) {
      return (
        <View
          style={{
            shadowOffset: { width: 0.4, height: 0 },
            shadowColor: "#000",
            shadowOpacity: 0.7,
            shadowRadius: 0.7,
          }}
        >
          <Video
            ref={video}
            style={{
              backgroundColor: "#e1e4e8",
              width: 325,
              height: 200,
              borderRadius: 20,
              marginTop: 5,
            }}
            source={currentRound.data[currentQuestion]?.video}
            resizeMode="cover"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              disabled={videoHasStopped}
              onPress={() => {
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync();
              }}
              style={{
                marginTop: 10,
                marginBottom: 5,
                color: "#D0D3D4",
                opacity: 1,
                shadowOffset: { width: -0.3, height: 0.5 },
                shadowColor: "#000",
                shadowRadius: 0.6,
                shadowOpacity: 0.4,
              }}
            >
              {status.isPlaying ? (
                <Ionicons
                  name="ios-pause-circle-outline"
                  size={38}
                  color="#D0D3D4"
                  style={{
                    textAlign: "center",
                    paddingLeft: 2,
                  }}
                />
              ) : (
                <Ionicons
                  name="ios-play-circle-outline"
                  size={38}
                  color="#D0D3D4"
                  style={{
                    textAlign: "center",
                    paddingLeft: 2,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const getRandomImage = () => {
    const vinylImages = [
      require("../../assets/vinyls/vinyl2.png"),
      require("../../assets/vinyls/vinyl3.png"),
      require("../../assets/vinyls/vinyl4.png"),
    ];

    let randomNumber = Math.floor(Math.random() * vinylImages.length);

    if (currentRound.data[currentQuestion]?.song) {
      setCurrentImage(vinylImages[randomNumber]);
    }
  };

  const [currentImage, setCurrentImage] = useState(null);
  const [musicHasStopped, setMusicHasStopped] = useState(false);
  React.useEffect(() => {
    getRandomImage();
  }, [currentQuestion]);

  const DisplaySong = () => {
    if (currentRound.data[currentQuestion]?.song) {
      return (
        <View
          style={{
            width: 200,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 85,
            shadowOffset: { width: 12, height: 12 },
            shadowColor: "#bababa",
            shadowOpacity: 1.0,
            shadowRadius: 18,
          }}
        >
          <Vinyl
            song={currentRound.data[currentQuestion]?.song}
            vinylImage={currentImage}
            musicHasStopped={musicHasStopped}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  const displayOption = () => {
    return (
      <View
        style={{
          marginTop: -5,
        }}
      >
        {currentRound.data[currentQuestion]?.options.map((option) => (
          <NeumorphismButton
            onPress={() => {
              checkAnswer(option);
              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
              }).start();
            }}
            disabled={ifOptionDisabled}
            key={option}
            style={[
              isAnswered && option === optionSelected
                ? {
                    borderWidth: 1.5,
                    borderColor: option === correctOption ? "#8bc901" : "red",
                  }
                : {},
              {
                minHeight: 50,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "space-between",
                justifyContent: "center",
                flexDirection: "row",
                width: 330,
              },
            ]}
          >
            <Text
              numberOfLines={4}
              style={{
                textAlign: "center",
                marginHorizontal: 30,
                fontFamily: "NovaSquare",
                color: "#D0D3D4",
                opacity: 1,
                shadowOffset: { width: -0.5, height: -0 },
                shadowColor: "#000",
                shadowOpacity: 0.8,
                shadowRadius: 0.5,
                fontSize: 19,
              }}
            >
              {option}
            </Text>
            {isAnswered && option === optionSelected ? (
              <View
                style={{
                  position: "absolute",
                  right: 16,
                  top: 0,
                  bottom: 0,
                  justifyContent: "center",
                }}
              >
                {option === correctOption ? (
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: "#8bc901",
                      fontSize: 19,
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="close"
                    style={{
                      color: "red",
                      fontSize: 19,
                    }}
                  />
                )}
              </View>
            ) : null}
          </NeumorphismButton>
        ))}
      </View>
    );
  };

  const nextButton = () => {
    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        nextQuestion();
      });
    };

    if (displayNextButton) {
      return (
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <NeumorphismButton
            onPress={() => {
              fadeOut();
            }}
            style={{
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </NeumorphismButton>
        </Animated.View>
      );
    } else {
      return null;
    }
  };

  const giveUpButton = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NeumorphismButton
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <Text style={styles.giveUpText}> Give Up </Text>
        </NeumorphismButton>
      </View>
    );
  };

  const retryQuizButton = () => {
    return (
      <NeumorphismButton onPress={restartQuiz}>
        <Text
          style={{
            fontFamily: "NovaSquare",
            color: "#dedede",
            opacity: 1,
            shadowOffset: { width: -0.8, height: -0 },
            shadowColor: "#000",
            shadowRadius: 0.7,
            shadowOpacity: 0.7,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Retry Quiz
        </Text>
      </NeumorphismButton>
    );
  };

  const displayProgressBar = () => {
    return (
      <View
        style={{
          width: "80%",
          height: 5,
          borderRadius: 25,
          backgroundColor: "#00000020",
          marginBottom: 20,
        }}
      >
        <Animated.View
          style={[
            {
              height: 5,
              borderRadius: 25,
              backgroundColor: "red",
            },
            {
              width: progessAnimation,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.quizContainer}>
      <View style={styles.quizHolder}>
        {displayProgressBar()}
        {displayQuestionCounter()}
        {displayQuestion()}
        {DisplaySong()}
        {DisplayImage()}
        {DisplayVideo()}
        {displayOption()}
      </View>
      <View style={styles.nextButtonContainer}>{nextButton()}</View>

      <Modal animationType="fade" transparent={true} visible={displayShowModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHolder}>
            <NeumorphismStyle>
              <View>
                <Text style={styles.modalTitleText}>
                  {currentRoundResults > currentRound.data.length / 2
                    ? "YOU ARE DEFINITELY A MUSIC HEAD!"
                    : "YOU SHOULD STUDY MORE MY DUDE!"}
                </Text>
              </View>
            </NeumorphismStyle>
            <Text style={styles.modalScoreKeeper}>
              Your score for this round:
            </Text>
            <View style={styles.scoreKeeperContainer}>
              <Text style={styles.scoreKeeperCounter}>
                {currentRoundResults}{" "}
              </Text>
              <Text style={styles.scoreKeeperNumber}>
                / {currentRound.data.length}
              </Text>
            </View>

            {currentRound.level === 3 ? (
              <Text style={styles.totalScoreKeeper}>
                Total results: {totalResult} \ {api.length}
              </Text>
            ) : null}

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentRound.level !== 3 ? (
                <NeumorphismButton
                  onPress={() => {
                    if (currentRound.level === 1) {
                      setCurrentRound({
                        data: rounds.level2,
                        level: 2,
                      });
                    }

                    if (currentRound.level === 2) {
                      setCurrentRound({
                        data: rounds.level3,
                        level: 3,
                      });
                    }

                    setdisplayShowModal(false);

                    setCurrentQuestion(0);
                    setCurrentRoundResults(0);
                    setOptionSelected(null);
                    setCorrectOption(null);
                    setifOptionDisabled(false);
                    setDisplayNextButton(false);
                    setIsAnswered(false);
                    setVideoHasStopped(false);

                    Animated.timing(progress, {
                      toValue: 0,
                      duration: 1000,
                      useNativeDriver: false,
                    }).start();
                  }}
                >
                  <Text
                    style={{
                      color: "#dedede",
                      opacity: 1,
                      shadowOffset: { width: -0.8, height: -0 },
                      shadowColor: "#000",
                      shadowRadius: 0.7,
                      shadowOpacity: 0.7,
                      fontSize: 24,
                      textAlign: "center",
                      fontFamily: "NovaSquare",
                    }}
                  >
                    Next level
                  </Text>
                </NeumorphismButton>
              ) : null}
              {retryQuizButton()}
              {giveUpButton()}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default QuizScreen;

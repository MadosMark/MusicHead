import React, { useRef } from "react";
import { Image, View, Text, Animated } from "react-native";

import NeumorphButtonHome from "../../components/NeumorphButtonHome";

import styles from "./HomeScreen.styles";

const HomeScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Text
          style={{
            fontFamily: "Anurati",
            fontSize: 50,
            color: "#dedede",
            opacity: 1,
            shadowOffset: { width: -1, height: -0 },
            shadowColor: "#000",
            shadowOpacity: 0.8,
            shadowRadius: 0.9,
          }}
        >
          MUSIC HEAD
        </Text>
      </Animated.View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/waves.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <NeumorphButtonHome
          onPress={() => {
            props.navigation.navigate("QuizScreen");
          }}
        >
          <Text
            style={{
              color: "#dedede",
              fontFamily: "Anurati",
              fontSize: 30,
              shadowOffset: { width: -1, height: -0 },
              shadowColor: "#000",
              shadowOpacity: 0.7,
              shadowRadius: 0.8,
              marginBottom: -5,
            }}
          >
            ENTER HERE
          </Text>
        </NeumorphButtonHome>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

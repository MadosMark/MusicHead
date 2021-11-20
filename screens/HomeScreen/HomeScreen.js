import React from "react";
import { Image, View, Text } from "react-native";

import NeumorphButtonHome from "../../components/NeumorphButtonHome";

import styles from "./HomeScreen.styles";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
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
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/waves.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <NeumorphButtonHome
        onPress={() => props.navigation.navigate("QuizScreen")}
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
          }}
        >
          ENTER HERE
        </Text>
      </NeumorphButtonHome>
    </View>
  );
};

export default HomeScreen;

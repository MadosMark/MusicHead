import React, { useRef, useEffect } from "react";
import { Image, View, Text, Animated } from "react-native";

import NeumorphButtonHome from "../../components/NeumorphButtonHome";
import styles from "./HomeScreen.styles";

const HomeScreen = (props) => {
  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Title}>MUSIC HEAD</Text>
      </View>

      <View style={styles.imageContainer}>
        <Animated.View style={{ transform: [{ scale: anim.current }] }}>
          <Image
            source={require("../../assets/images/waves.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>
      </View>

      <View>
        <NeumorphButtonHome
          onPress={() => {
            props.navigation.navigate("QuizScreen");
          }}
        >
          <Text style={styles.EnterText}>ENTER HERE</Text>
        </NeumorphButtonHome>
      </View>
    </View>
  );
};

export default HomeScreen;

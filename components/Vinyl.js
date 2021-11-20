import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  Easing,
  TouchableOpacity,
} from "react-native";
import NeumorphismButton from "./NeumorphismButton";
import { Audio } from "expo-av";

const Vinyl = (props) => {
  const { song, vinylImage, musicHasStopped } = props;

  let rotateValueHolder = new Animated.Value(0);
  const [sound, setSound] = useState(null);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(props.song);

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  const onStartVinylAnimation = () => {
    console.log("starting_loop_initial");
    rotateValueHolder.setValue(0);

    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 11500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      console.log("starting_loop");
    });
  };

  React.useEffect(() => {
    if (musicHasStopped) {
      setSound(null);
    } else if (sound) {
      onStartVinylAnimation();
    }
  }, [sound, musicHasStopped]);

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound, musicHasStopped]);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.Vinylcontainer}>
      <Animated.Image
        source={vinylImage}
        style={[styles.vinyl, { transform: [{ rotate: RotateData }] }]}
      />

      <NeumorphismButton
        disabled={musicHasStopped}
        onPress={() => {
          if (props.song) {
            playSound();
          }
        }}
      >
        <Text
          style={{
            color: "#dedede",
            opacity: 1,
            shadowOffset: { width: -0.6, height: -0 },
            shadowColor: "#000",
            shadowRadius: 0.6,
            shadowOpacity: 0.7,
            fontFamily: "NovaSquare",
            fontSize: 18,
          }}
        >
          Listen
        </Text>
      </NeumorphismButton>
    </View>
  );
};

const styles = StyleSheet.create({
  Vinylcontainer: {
    alignItems: "center",
    borderRadius: 2,
  },
  vinyl: {
    width: 200,
    height: 200,
    marginBottom: 5,
    borderRadius: 150,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});

export default Vinyl;

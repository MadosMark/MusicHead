import React, { useState, useRef } from "react";
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
import { Ionicons } from "@expo/vector-icons";

const Vinyl = (props) => {
  const { song, vinylImage, musicHasStopped } = props;

  // let rotateValueHolder = new Animated.Value(0);
  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playButtonDimension, setPlayButtonDimension] = useState({
    width: null,
    height: null,
  });

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(song);
    setSound(sound);
    console.log("Playing Sound");
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function pauseSound() {
    console.log("pausing sound");
    setIsPlaying(false);
    await sound.pauseAsync();
  }

  async function resumeSound() {
    console.log("resume sound");
    setIsPlaying(true);
    await sound.playAsync();
  }

  const onStartVinylAnimation = () => {
    // rotateValueHolder.setValue(0);

    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 11500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    if (isPlaying) {
      onStartVinylAnimation();
    }
  }, [isPlaying]);

  React.useEffect(() => {
    if (musicHasStopped) {
      console.log("music has stopped", musicHasStopped);
      setSound(null);
      Animated.timing(rotateValueHolder).stop();
    }
  }, [musicHasStopped]);

  React.useEffect(() => {
    return sound
      ? () => {
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

      {!musicHasStopped ? (
        <TouchableOpacity
          onLayout={({ nativeEvent }) =>
            setPlayButtonDimension({
              width: nativeEvent.layout.width,
              height: nativeEvent.layout.height,
            })
          }
          disabled={musicHasStopped}
          onPress={() => {
            if (song) {
              if (sound === null) {
                playSound();
              } else {
                console.log("there is sound");
                if (isPlaying) {
                  pauseSound();

                  // rotateValueHolder.stopAnimation((value) => {
                  //   rotateValueHolder.setValue(value);
                  //   console.log(value);
                  // });
                  rotateValueHolder.stopAnimation();
                  rotateValueHolder.extractOffset();
                } else {
                  console.log(rotateValueHolder);
                  resumeSound();
                }
              }
            }
          }}
          style={{
            padding: 5,
            color: "#D0D3D4",
            opacity: 1,
            shadowOffset: { width: -0.5, height: -0 },
            shadowColor: "#000",
            shadowRadius: 0.7,
            shadowOpacity: 0.7,
          }}
        >
          {isPlaying ? (
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
      ) : (
        <View
          style={{
            width: playButtonDimension.width,
            height: playButtonDimension.height,
          }}
        />
      )}
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
    marginBottom: 3,
    borderRadius: 150,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});

export default Vinyl;

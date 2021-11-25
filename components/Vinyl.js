import React, { useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const Vinyl = (props) => {
  const { song, vinylImage, musicHasStopped } = props;

  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playButtonDimension, setPlayButtonDimension] = useState({
    width: null,
    height: null,
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(song);
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function pauseSound() {
    setIsPlaying(false);
    await sound.pauseAsync();
  }

  async function resumeSound() {
    setIsPlaying(true);
    await sound.playAsync();
  }

  const onStartVinylAnimation = () => {
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
                if (isPlaying) {
                  pauseSound();
                  rotateValueHolder.stopAnimation();
                  rotateValueHolder.extractOffset();
                } else {
                  resumeSound();
                }
              }
            }
          }}
          style={{
            paddingHorizontal: 20,
            color: "#D0D3D4",
            opacity: 1,
            shadowOffset: { width: -0.3, height: 0.3 },
            shadowColor: "#000",
            shadowRadius: 0.8,
            shadowOpacity: 0.9,
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

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import MyStack from "./components/Navigator";
import { NovaSquare_400Regular } from "@expo-google-fonts/nova-square";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Asset } from "expo-asset";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Anurati: require("./assets/fonts/anurati.otf"),
    NovaSquare: NovaSquare_400Regular,
  });

  function cacheAssets(assets) {
    return assets.map((asset) => {
      return Asset.fromModule(asset).downloadAsync();
    });
  }

  async function _loadAssetsAsync() {
    const allAssets = cacheAssets([
      require("./assets/images/afterHours.webp"),
      require("./assets/images/compton.webp"),
      require("./assets/images/kidsSeeGhost.webp"),
      require("./assets/images/travisScott.webp"),
      require("./assets/images/50cent.webp"),
      require("./assets/images/d12.webp"),
      require("./assets/images/dmx.webp"),
      require("./assets/images/macMillerCircles.webp"),
      require("./assets/images/watchTheThrone.webp"),
      require("./assets/images/nf.webp"),
      require("./assets/images/popSmoke.webp"),
      require("./assets/images/lilWayne.webp"),
      require("./assets/images/waves.png"),
      require("./assets/images/drake.webp"),
      require("./assets/images/macklemore.webp"),
      require("./assets/images/cudiKanye.webp"),
      require("./assets/videos/jayZ.mp4"),
      require("./assets/videos/jcoleBeat.mp4"),
      require("./assets/videos/joynerLucas.mp4"),
      require("./assets/videos/kendrickGQ.mp4"),
      require("./assets/videos/lilDicky.mp4"),
      require("./assets/videos/logic44.mp4"),
      require("./assets/videos/youngThugVideo.mp4"),
      require("./assets/vinyls/vinyl2.png"),
      require("./assets/vinyls/vinyl3.png"),
      require("./assets/vinyls/vinyl4.png"),
    ]);

    await Promise.all(allAssets);
  }

  if (!fontsLoaded || !isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <MyStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}

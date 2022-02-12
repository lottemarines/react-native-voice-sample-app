import React, { useState, useEffect } from "react";
// import { requestPermissionsAsync } from "expo-ads-admob";
import { homeData1 } from "data/homeData1";
import { startingAd, showReviewWindows, calcCounts } from "utils/mathHelper";
import { Interstitial } from "utils/adHelper";
import { makeSound } from "utils/soundHelper";
import { TabView } from "react-native-tab-view";
import { TabBar } from "components/atoms/TabBar";
import { VoiceList } from "components/organisms/VoiceList";
import NetInfo from "@react-native-community/netinfo";
import GlobalActivityIndicator from "components/atoms/GlobalActivityIndicator";

export const SubVoiceScreen = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "1", title: "1" }]);
  useEffect(() => {
    // requestPermissionsAsync();
    checkStatus();
  }, []);

  const handlClick = (musicItem: any) => {
    checkNet();
    startingAd() ? Interstitial() : makeSound(musicItem);
    showReviewWindows();
    calcCounts();
  };

  const checkStatus = async () => {
    await checkNet();
  };

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "1":
        return <VoiceList handlClick={handlClick} voice_data={homeData1()} />;
      default:
        return null;
    }
  };

  const checkNet = async () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected == false) {
        setIsConnected(false);
      }
    });
  };

  if (isConnected === false) {
    return <GlobalActivityIndicator />;
  }

  const renderTabBar = (props: any) => <TabBar {...props} />;

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

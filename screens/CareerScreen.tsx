import React, { useState, useEffect } from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import { requestPermissionsAsync } from 'expo-ads-admob';
import {homeData1} from "data/homeData1";
import {startingAd,showReviewWindows,calcCounts} from "utils/mathHelper";
import {Interstitial} from "utils/adHelper";
import {makeSound} from "utils/soundHelper";
import {isNoticed} from "utils/validator";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import VoiceList from "components/lists/VoiceList";
import { colorCodes } from 'constants/colors'
import NetInfo from "@react-native-community/netinfo";
import {NoticeModal} from 'components/modal/notice_modal'
import GlobalActivityIndicator from 'components/atoms/GlobalActivityIndicator'

export const CareerScreen = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true)
  const [isNoticedState, setIsNoticedState] = useState<boolean>(false)
  useEffect(() => {
    requestPermissionsAsync();
    checkStatus();
  }, [])

  const handlClick = (musicItem: any) => {
    checkNet()
    startingAd() ? Interstitial() :
      makeSound(musicItem)
      showReviewWindows()
      calcCounts()
    ;
  }

  const checkStatus = async () => {
    const isNoticeValue = await isNoticed()
    setIsNoticedState(isNoticeValue)
    checkNet()
  }

  const checkNet = async () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected == false) {
        setIsConnected(false)
      }
    });
  }
  
    if ( isConnected === false ){ return (<GlobalActivityIndicator/>) }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => (
            <DefaultTabBar
              style={styles.tabs}
              tabStyle={styles.tab}
              underlineStyle={styles.underline}
              activeTextColor="black"
              inactiveTextColor="black"
            />
          )}
        >
          <VoiceList
            tabLabel="1"
            handlClick={handlClick}
            voice_data={homeData1()}
          />
        </ScrollableTabView>
        <NoticeModal isVisible={isNoticedState} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.totalColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    paddingBottom: 0,
  },
  tabs: {
    width: '100%', // NOTE: Androidでタブが消えてしまうため、設置
    height: 48,
    borderBottomWidth: 0,
    backgroundColor: colorCodes.totalColor,
  },
  underline: {
    backgroundColor: colorCodes.activeColor,
  },
});

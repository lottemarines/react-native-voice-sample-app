import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { requestPermissionsAsync } from 'expo-ads-admob';
import {homeData1} from "data/homeData1";
import {startingAd,showReviewWindows,calcCounts} from "utils/mathHelper";
import {Interstitial} from "utils/adHelper";
import {makeSound} from "utils/soundHelper";
import ScrollableTabView, { DefaultTabBar }  from 'react-native-scrollable-tab-view';
import VoiceList from "components/lists/VoiceList";
import { colorCodes } from 'constants/colors'
import NetInfo from "@react-native-community/netinfo"
import GlobalActivityIndicator from 'components/atoms/GlobalActivityIndicator'

export default class LongVoiceScreen extends React.Component {
  state = {isConnected: true}
  componentDidMount = () => {
    requestPermissionsAsync();
    this._unsubscribe = this.props.navigation.addListener('focus', () => this.checkNet());
  }
  componentWillUnmount= () => this._unsubscribe();

  handlClick = (musicItem: any) => {
    this.checkNet()
    startingAd() ? Interstitial() :
      makeSound(musicItem)
      showReviewWindows()
      calcCounts()
    ;
  }

  checkNet = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected == false) {
        this.setState({isConnected: false})
      }
    });
  }
  
  render() {
    if ( this.state.isConnected === false ){ return (<GlobalActivityIndicator/>) }
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
            handlClick={this.handlClick}
            voice_data={homeData1()}
          />
        </ScrollableTabView>
      </SafeAreaView>
    );
  }
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

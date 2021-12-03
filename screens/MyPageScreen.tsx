import React from 'react';
import { Dimensions,Platform,SafeAreaView,StyleSheet,View,ScrollView } from 'react-native';
import { ENV } from "config/env"
import { isset } from "utils/validator"
import { PricingCard,Button } from 'react-native-elements'
import { PublisherBanner } from 'expo-ads-admob'
import { colorCodes } from 'constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sharing, reviewing } from 'utils/storeHelper'
import {NoticeModal} from 'components/modal/notice_modal'

const AdMobBunnerId = Platform.OS === 'ios' ? ENV.AdMobBunnerId_iOS : ENV.AdMobBunnerId_Android;
const screenWidthSize = Dimensions.get('window').width
const itemWidth = (screenWidthSize - 20)
const itemHeight = (Dimensions.get('window').height) / 4
export default class MyPageScreen extends React.Component {
  state = {counts: 0, isOpen: false}
  componentDidMount = () => this._unsubscribe = this.props.navigation.addListener('focus', () => this.getItems());
  componentWillUnmount= () => this._unsubscribe();

  getItems = async () => {
    const count_value = await AsyncStorage.getItem('counts');
    this.setState({counts: count_value });
  }
  handlClick = (flag: string) => {
    flag == 'review' && reviewing()
    flag == 'share' && sharing()
  }
  openNoticeModal = () => this.setState({isOpen: !this.state.isOpen})

  navigateLib = () => this.props.navigation.navigate('Lib')

  render() {
    const {counts} = this.state
    const cardTitle = "論破レベル"
    const levelText = `Lv.${isset(counts) ? counts : 0 }`
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.body}>
          <PricingCard
            color="#4f9deb"
            title={cardTitle}
            price={levelText}
            info={['なんか', 'そうゆう', 'データあるんですか？']}
            button={{ title: '論破アイテムGET！' }}
            onButtonPress={()=>this.navigateLib()}
          />
          <Button
            titleStyle={styles.buttonText}
            buttonStyle={styles.listItem}
            onPress={()=>this.handlClick('share')}
            title={'シェアしてもらってもいいっすか？'}
          />
          <Button
            titleStyle={styles.buttonText}
            buttonStyle={styles.listItem}
            onPress={()=>this.handlClick('review')}
            title={'感想・ボイスのリクエスト\n（それってあなたの感想ですよね？）'}
          />
          <NoticeModal triger={"button"}/>
        </ScrollView>
        <PublisherBanner
          style={styles.fixBanner}
          bannerSize="smartBannerPortrait"
          adUnitID={AdMobBunnerId}
          onAdMobDispatchAppEvent={this.adMobEvent}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.totalColor,
    flex: 1,
  },
  body: {
    backgroundColor: colorCodes.totalColor,
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 18,
    color: 'black'
  },
  listItem: {
    backgroundColor: '#d0dba2',
    flexGrow: 1,
    margin: 15,
    padding: 0,
    width: itemWidth,
    height: itemHeight/3,
    borderRadius: 20,
    overflow: 'hidden'
  },
  fixBanner: {position: 'absolute', bottom: 0},
});

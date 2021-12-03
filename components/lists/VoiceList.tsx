import React from 'react';
import {Platform,SafeAreaView, StyleSheet, View,FlatList,Dimensions} from 'react-native';
import { Button } from 'react-native-elements'
import { ENV } from "config/env";
import { PublisherBanner } from 'expo-ads-admob';
import { colorCodes } from 'constants/colors'

const AdMobBunnerId = Platform.OS === 'ios' ? ENV.AdMobBunnerId_iOS : ENV.AdMobBunnerId_Android;

const screenWidthSize = Dimensions.get('window').width
const itemWidth = (screenWidthSize - 20) / 2
const itemHeight = (Dimensions.get('window').height) / 4

export default class VoiceList extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <FlatList
            style={styles.sectionContainer}
            numColumns={2}
            data={this.props.voice_data}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem}
          />
        </View>
        <PublisherBanner
          style={styles.fixBanner}
          bannerSize="smartBannerPortrait"
          adUnitID={AdMobBunnerId}
          onAdMobDispatchAppEvent={this.adMobEvent}
        />
      </SafeAreaView>
    );
  }


  renderItem = ({item, index}) => {
    const disableButton = item.level >= Number(this.props.counts)
    return (
      <Button
        disabled={disableButton}
        disabledStyle={{backgroundColor:'black'}}
        disabledTitleStyle={{color:'white'}}
        titleStyle={styles.buttonText}
        buttonStyle={styles.listItem}
        onPress={()=>this.props.handlClick(item.music)}
        title={disableButton ? `残りLv.${item.level - Number(this.props.counts)}` : item.title}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.totalColor,
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
  buttonText: {
    fontSize: 18,
    color: 'black'
  },
  body: {
    backgroundColor: colorCodes.totalColor,
  },
  sectionContainer: {
    padding: 8,
  },
  listItem: {
    backgroundColor: '#d0dba2',
    flexGrow: 1,
    margin: 15,
    padding: 0,
    width: itemWidth-25,
    height: itemHeight/3,
    borderRadius: 20,
    overflow: 'hidden'
  },
  fixBanner: {position: 'absolute', bottom: 0},
});

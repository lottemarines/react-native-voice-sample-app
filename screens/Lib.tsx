import React from 'react';
import { TextInput, FlatList,Platform,SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ENV } from "config/env"
import { isset } from "utils/validator"
import { Avatar, ListItem, Card, Overlay } from 'react-native-elements'
import { PublisherBanner } from 'expo-ads-admob'
import { colorCodes } from 'constants/colors'
import { ranpaData, SHOW_QUESTION_IMG } from 'data/ronpaData'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AdMobBunnerId = Platform.OS === 'ios' ? ENV.AdMobBunnerId_iOS : ENV.AdMobBunnerId_Android;

const screenWidthSize = Dimensions.get('window').width
const itemWidth = (screenWidthSize - 20)
const itemHeight = (Dimensions.get('window').height) / 4
const imageWidth = (screenWidthSize - 20) * 1/2
const data = ranpaData()

export default class Lib extends React.Component {
  state = {
    counts: 0,
  }

  componentDidMount = () => this._unsubscribe = this.props.navigation.addListener('focus', () => this.getItems());
  componentWillUnmount= () => this._unsubscribe();

  getItems = async () => {
    const count_value = await AsyncStorage.getItem('counts');
    this.setState({counts: count_value });
  }

  navigateDetail = (item: any) => {
    this.state.counts >= item.level && this.props.navigation.navigate('LibDetail', item)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }

  renderItem = ({item, index}) => {
    const {counts} = this.state
    return (
      <TouchableOpacity onPress={() => this.navigateDetail(item)}>
        <ListItem containerStyle={styles.listitem}>
          <Avatar source={counts >= item.level ? item.imagesrc : SHOW_QUESTION_IMG()} />
          <ListItem.Content>
            <ListItem.Title>{counts >= item.level ? item.title : `残りLv.${item.level - counts}でGET`}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color="black"/>
        </ListItem>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.totalColor,
    flex: 1,
  },
  listitem: {
    backgroundColor: colorCodes.passiveColor,
  },
  cardBody: {
    alignItems: 'center',
  },
  image: {
    margin: 20,
    width: imageWidth,
    height: imageWidth,
  },
  fixBanner: {position: 'absolute', bottom: 0},
});

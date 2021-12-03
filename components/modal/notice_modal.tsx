import React, { Component } from "react";
import {Dimensions,Text, StyleSheet } from "react-native";
import {Card,Button,Overlay} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {isset}from'utils/validator'
import { BEER_IMG } from 'assets/images'
import {gettingStoreURL} from 'utils/storeHelper'
const screenWidthSize = Dimensions.get('window').width
const itemWidth = (screenWidthSize - 20)
const itemHeight = (Dimensions.get('window').height) / 4

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  buttonText: {
    fontSize: 16,
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
});

export class NoticeModal extends Component {
  state = {isClose: null,handleModal: false};

  closeModal = () => {
    this.setState({ isClose: true, handleModal: !this.state.handleModal });
  }

  handleModal = () => {
    this.setState({ handleModal: !this.state.handleModal });
  }

  render() {
    const {isClose} = this.state
    const {isVisible, triger} = this.props

    // NOTE: trigerがあるときはトリガーでStateを更新する。ないときは一度のみの表示。
    const isVisibleModal = triger ? this.state.handleModal : isset(isClose) ? false : isVisible

    return (
      <>
      {triger == "button" &&
        <Button
          titleStyle={styles.buttonText}
          buttonStyle={styles.listItem}
          onPress={()=>this.handleModal()}
          title={'他アプリの紹介\n（なんだろう、DLしてもらっていいすか？）'}
        />
      }
      <Overlay overlayStyle={{padding:3}} isVisible={isVisibleModal}>
        <Card containerStyle={{margin:3}}>
          <Icon
            onPress={()=>this.closeModal()}
            name="close"
            color="gray"
            size={30}
          />
          <Card.Title>新アプリのおしらせ</Card.Title>
          <Card.Divider/>
          <Card.Image style={{height:200}} source={BEER_IMG}/>
            <Text style={{fontSize:18 ,marginTop: 30, marginBottom: 30}}>
              ひろゆきラップをリリースしました！{"\n"}
              DJひろゆきラップバトルで楽しもう！！
            </Text>
            <Button
              type="outline"
              onPress={()=>gettingStoreURL()}
              buttonStyle={styles.button}
              title='アプリをDLしてみる'
            />
        </Card>
      </Overlay>
      </>
    );
  }
}
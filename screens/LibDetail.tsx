import React, { Component } from "react"
import { Dimensions, TextInput, StyleSheet, SafeAreaView, Modal } from "react-native"
import { Card, Button } from 'react-native-elements'
import { colorCodes } from 'constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {AppURL, sharingItem} from 'utils/storeHelper'

const screenWidthSize = Dimensions.get('window').width
const imageWidth = (screenWidthSize - 20) * 1/2

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.totalColor,
    flex: 1,
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

export default class LibDetail extends Component {

  render() {
    const data = this.props.route.params
    const message = '＊＊＊Lv.' + data.level + 'に到達！！＊＊＊\n 論破アイテム「' + data.title + '」\n #ひろゆき #ひろゆきサウンド　\n' + AppURL
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <Card containerStyle={styles.cardBody}>
            <Card.Title>{data.title}(Lv.{data.level})</Card.Title>
            <Card.Divider/>
            <Card.Image
              style={styles.image}
              resizeMode="cover"
              source={data.imagesrc}
            />
            <Card.Divider/>
            <Button
              onPress={()=>sharingItem(data.title, message, data.imagesrc)}
              title={'論破アイテムをシェアしよう'}
              type="outline"
            />
            <TextInput
              style={{ color: 'black' }}
              editable={false}
              multiline
              scrollEnabled={false}
              defaultValue={data.description}
            />
          </Card>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
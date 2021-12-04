import React, { useState, useEffect } from "react";
import { FlatList,SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'
import { colorCodes } from 'constants/colors'
import { ranpaData, SHOW_QUESTION_IMG } from 'data/ronpaData'
import AsyncStorage from '@react-native-async-storage/async-storage'

const screenWidthSize = Dimensions.get('window').width
const imageWidth = (screenWidthSize - 20) * 1/2
const data = ranpaData()

export const LibScreen = (props: any) => {
  const [counts, setCounts] = useState<number>(0)

  useEffect(() => { getItems() }, [])

  const getItems = async () => {
    const count_value = await AsyncStorage.getItem('counts');
    setCounts(Number(count_value))
  }

  const navigateDetail = (item: any)  => counts >= item.level && props.navigation.navigate('LibDetail', item)

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity onPress={() => navigateDetail(item)}>
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
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

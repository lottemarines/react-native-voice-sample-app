import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import { ENV } from "config/env";
// import { PublisherBanner } from "expo-ads-admob";
import colors, { colorCodes } from "constants/colors";

const AdMobBunnerId =
  Platform.OS === "ios" ? ENV.AdMobBunnerId_iOS : ENV.AdMobBunnerId_Android;

const screenWidthSize = Dimensions.get("window").width;
const itemWidth = (screenWidthSize - 20) / 2;
const itemHeight = Dimensions.get("window").height / 4;

export const VoiceList = (props: any) => {
  const { handlClick, counts, voice_data } = props;

  const renderItem = ({ item, index }: any) => {
    const disableButton = item.level >= Number(counts);
    // TODO: 最初はindex === 0の部分を消す。
    return (
      <>
        {index === 0 && (
          <PublisherBanner
            bannerSize="smartBannerPortrait"
            adUnitID={AdMobBunnerId}
          />
        )}
        {index > 0 && (
          <Button
            disabled={disableButton}
            disabledStyle={{
              backgroundColor: colors.buttons.disabledBackgroundColor,
            }}
            disabledTitleStyle={{ color: colors.buttons.disabledTitleColor }}
            titleStyle={styles.buttonText}
            buttonStyle={index === 1 ? styles.toplistItem : styles.button}
            onPress={() => handlClick(item.music)}
            title={
              disableButton
                ? `残りLv.${item.level - Number(props.counts)}`
                : item.title
            }
          />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <FlatList
          style={styles.sectionContainer}
          numColumns={2}
          data={voice_data}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

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
    color: "black",
  },
  body: {
    backgroundColor: colorCodes.totalColor,
  },
  sectionContainer: {
    padding: 0,
    margin: 0,
  },
  button: {
    backgroundColor: colors.buttons.backgroundColor,
    flexGrow: 1,
    margin: 15,
    padding: 0,
    width: itemWidth - 25,
    height: itemHeight / 3,
    borderRadius: 20,
    overflow: "hidden",
  },
  toplistItem: {
    backgroundColor: "#d0dba2",
    flexGrow: 1,
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 0,
    width: itemWidth - 25,
    height: itemHeight / 3,
    borderRadius: 20,
    overflow: "hidden",
  },
});

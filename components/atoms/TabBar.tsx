import React from "react";
import { TabBar as TabBarRN } from "react-native-tab-view";
import { Text, StyleSheet } from "react-native";
import colors from "constants/colors";

export const TabBar = (props: any) => {
  return (
    <TabBarRN
      {...props}
      indicatorStyle={styles.underline}
      style={styles.tabs}
      renderLabel={({ route }) => (
        <Text style={{ color: "black" }}>{route.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabs: {
    width: "100%", // NOTE: Androidでタブが消えてしまうため、設置
    height: 48,
    borderBottomWidth: 0,
    backgroundColor: colors.tabs.activeBackgroundColor,
  },
  underline: {
    backgroundColor: colors.tabs.underlineColor,
  },
});

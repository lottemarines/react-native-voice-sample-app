import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  cross: {
    position: "absolute",
    top: "0%",
    left: "0%",
  },
});

export const ModalCloseIcon = (props: any) => {
  const { size, onPress } = props;
  return (
    <TouchableOpacity style={styles.cross} onPress={() => onPress()}>
      <Icon name="close" color="gray" size={size} />
    </TouchableOpacity>
  );
};

import * as StoreReview from "expo-store-review";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isDev } from "./validator";

export const startingAd = () => {
  if (isDev()) {
    return;
  }
  return Math.floor(Math.random() * 20) == 3;
};

export const showReviewWindows = () => {
  if (isDev()) {
    return;
  }
  Math.floor(Math.random() * 15) == 3 && StoreReview.requestReview();
};

export const calcCounts = async () => {
  const count_value = await AsyncStorage.getItem("counts");
  if (count_value === "NaN") {
    await AsyncStorage.setItem("counts", "1");
  } else {
    const countNumber = Number(count_value) + 1;
    await AsyncStorage.setItem("counts", String(countNumber));
  }
};

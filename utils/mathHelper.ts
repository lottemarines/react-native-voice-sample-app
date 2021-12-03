import * as StoreReview from 'expo-store-review'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import {isset} from 'utils/validator'

export const startingAd = () => {
  return Math.floor(Math.random() * 20) == 3;
}

export const showReviewWindows = () => {
  const channel = Constants.manifest.releaseChannel;
  if (!isset(channel)) {
    return
  }
  Math.floor(Math.random() * 15) == 3 && StoreReview.requestReview();
}

export const calcCounts = async () => {
  const count_value = await AsyncStorage.getItem('counts');
  if (count_value === 'NaN') {
    await AsyncStorage.setItem('counts','1');
  }else{
    const countNumber = Number(count_value) + 1
    await AsyncStorage.setItem('counts',String(countNumber));
  }
}

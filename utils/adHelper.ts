import { AdMobInterstitial } from 'expo-ads-admob';
import {Platform} from 'react-native';
import {ENV} from "config/env";

const AdMobScreenId = Platform.OS === 'ios' ? ENV.AdMobScreenId_iOS : ENV.AdMobScreenId_Android;

export const Interstitial = async() => {
  await AdMobInterstitial.setAdUnitID(AdMobScreenId);
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
}

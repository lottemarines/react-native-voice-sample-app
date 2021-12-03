import {Share, Platform} from 'react-native';
import * as Linking from 'expo-linking'
import Constants from 'expo-constants'
import {isset} from 'utils/validator'
import {iosStore, androidStore} from 'constants/store'

export const AppURL = Platform.OS === 'ios' ? `https://apps.apple.com/app/apple-store/id${iosStore.id}` : `https://play.google.com/store/apps/details?id=${androidStore.id}`;
const ReviewURL = Platform.OS === 'ios' ? `https://apps.apple.com/app/apple-store/id${iosStore.id}?action=write-review` : `https://play.google.com/store/apps/details?id=${androidStore.id}&showAllReviews=true`

const AdStore_iOS = Platform.OS === 'ios' ? `https://apps.apple.com/app/apple-store/id${iosStore.rap_id}` : `https://play.google.com/store/apps/details?id=${androidStore.rap_id}`;

export const gettingStoreURL = () => Linking.openURL(AdStore_iOS);

export const sharing = () => {
  Share.share({
    title: 'ひろゆきサウンド',
    message: `#ひろゆき #ひろゆきサウンド \n なんだろう、ダウンロードしてもらっていいすか？｜\n${AppURL}`,
  });
}

export const sharingItem = (title: string, message: string, imagePath?: string) => {
  Share.share({
    title: title,
    message: message,
    url: imagePath,
  });
}

export const reviewing = () => {
  const channel = Constants.manifest.releaseChannel;
  if (!isset(channel)) {
    return
  }
  Linking.openURL(ReviewURL);
}

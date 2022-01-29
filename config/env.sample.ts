import * as Updates from "expo-updates";
const ENVs = {
  dev: {
    // AdMob
    AdMobBunnerId_iOS: "ca-app-pub-3940256099942544/6300978111",
    AdMobBunnerId_Android: "ca-app-pub-3940256099942544/6300978111",
    AdMobScreenId_iOS: "ca-app-pub-3940256099942544/1033173712",
    AdMobScreenId_Android: "ca-app-pub-3940256099942544/1033173712",
    AdMobRewardId_iOS: "ca-app-pub-3940256099942544/1712485313",
    AdMobRewardId_Android: "ca-app-pub-3940256099942544/5224354917",
  },
  production: {
    // AdMob
    AdMobBunnerId_iOS: "",
    AdMobBunnerId_Android: "",
    AdMobScreenId_iOS: "",
    AdMobScreenId_Android: "",
  },
};
function getEnvs() {
  const channel = Updates.releaseChannel;

  if (channel === "production") {
    return ENVs.production;
  } else {
    return ENVs.dev;
  }
}
export const ENV = getEnvs();

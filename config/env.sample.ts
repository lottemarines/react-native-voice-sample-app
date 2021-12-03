import Constants from 'expo-constants';
const ENVs = {
  dev: {
    environment: "dev",
    BaseApiUrl: "http://" + process.env.API_IP + ":4000",
    UserEndpoint: "/api/v1/auth",
    // AdMob
    AdMobBunnerId_iOS:"ca-app-pub-3940256099942544/6300978111",
    AdMobBunnerId_Android:"ca-app-pub-3940256099942544/6300978111",
    AdMobScreenId_iOS:"",
    AdMobScreenId_Android:"",
    },
  production: {
    environment: "production",
    BaseApiUrl: "http://",
    // AdMob
    AdMobBunnerId_iOS:"",
    AdMobBunnerId_Android:"",
    AdMobScreenId_iOS:"",
    AdMobScreenId_Android:"",
  },
};
function getEnvs() {
  const channel = Constants.manifest.releaseChannel;

  if (channel === "production") {
    return ENVs.production;
  }else{
    return ENVs.dev;
  }
}
export const ENV = getEnvs();
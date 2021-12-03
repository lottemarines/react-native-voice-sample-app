import { Audio } from 'expo-av';


export const makeSound = async(musicData: any) => {
  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  try {
    const soundObject = new Audio.Sound();
    
    await soundObject.loadAsync(musicData);
    await soundObject.playAsync();
    await sleep(10000);
    await soundObject.unloadAsync();
  }
  catch (error) {
    console.log(error)
  }
}

export const sleep = async(ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
import AsyncStorage from '@react-native-async-storage/async-storage'

interface RegExpCollection {
  [key: string]: RegExp
}

export const REGEXP: RegExpCollection = {
  mail: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
  password: /^[a-zA-Z0-9!-/:-@¥[-`{-~]{8,}$/,
  kana: /^[\u3041-\u3096 　]+$/,
  phoneNumber: /^(090|080|070)\d{4}\d{4}$/,
  emptyString: /^\s*$/,
  number: /^\d+$/,
  zipcode: /^[0-9]{7}$/,
  line: /^[0-9\-]+$/,
}

export const isValidFormat = (type: string) => (value: string) => {
  return REGEXP[type].test(value)
}

export const isValidRange = (min: number, max: number) => (
  value: string | number
  ) => {
  return !!(min <= Number(value) && Number(value) <= max)
}

export const isNoticed = async () => {
  // await AsyncStorage.removeItem('isNoticed'); // 開発用
  const noticed_value = await AsyncStorage.getItem('isNoticed');
  if (noticed_value === 'NaN' || !noticed_value) {
    await AsyncStorage.setItem('isNoticed','yes');
    return true
  }
  return false
}

export const isOnlyEmptyString = isValidFormat('emptyString')
export const isEmail = isValidFormat('mail')
export const isPassword = isValidFormat('password')
export const isKana = isValidFormat('kana')
export const isPhoneNumber = isValidFormat('phoneNumber')
export const isZipcode = isValidFormat('zipcode')
export const isLine = isValidFormat('line')
export const isNumber = isValidFormat('number')


export const isTestRange = isValidRange(10, 16)

export const isset = (value: any) => {
  if(value === "" || value === null || value === undefined){
    return false
  }else{
    return true
  }
}

export const isMoney = (value: any) => {
  if(!isset(value) || value == 0 || !isNumber(value)){
    return true
  }
}
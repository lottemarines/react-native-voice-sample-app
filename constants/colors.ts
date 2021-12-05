export const colorCodes = {
  totalColor: '#FFFFCC',
  activeColor: '#dec5a6',
  passiveColor: '#ebf0c7'
}

// colors.tabs...と使う
export default {
  ...colorCodes,
  headers: {
    activeColor: '#dae33b',
  },
  tabs: {
    activeColor: '#959c17',
    activeBackgroundColor: '#f5ffa8',
    passiveBackgroundColor: '#ffffff',
  },
  buttons: {
    backgroundColor: '#d0dba2',
    titleColor: 'black',
    disabledBackgroundColor: 'black',
    disabledTitleColor: 'white',
  }
}

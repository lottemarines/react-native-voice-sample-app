import React from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { colorCodes } from 'constants/colors'

const GlobalActivityIndicator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        animating = {true}
        color = {'black'} 
        size = "large"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.backgroundColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default GlobalActivityIndicator

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/profile.jpg'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>João Vitor</Text>
      </View>
      <Image source={userImg} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35 //legal colocar metade da altura
    
  },
})

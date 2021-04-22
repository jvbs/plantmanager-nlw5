import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import { Welcome } from '../screens/Welcome'
import { Confirmation } from '../screens/Confirmation'
import { UserIdentification } from '../screens/UserIdentification'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}>
      <stackRoutes.Screen 
        name="Welcome"
        component={Welcome}
      />
      <stackRoutes.Screen 
        name="UserIdentification"
        component={UserIdentification}
      />
      <stackRoutes.Screen 
        name="Confirmation"
        component={Confirmation}
      />
  </stackRoutes.Navigator>
)

export default AppRoutes

// const styles = StyleSheet.create({})

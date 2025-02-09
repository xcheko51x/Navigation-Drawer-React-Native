import * as React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

function HomeScreen() {
  return(
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

function SettingsScreen() {
  return(
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  )
}

function ProfileScreen() {
  return(
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            drawerIcon: ({size, color}) => (
              <Ionicons
                name='home'
                size={size}
                color={color}
              />  
            )
          }}
        />

        <Drawer.Screen 
          name='Settings'
          component={SettingsScreen}
          options={{
            drawerIcon: ({size, color}) => (
              <Ionicons
                name='settings'
                size={size}
                color={color}
              />  
            )
          }}
        />

        <Drawer.Screen 
          name='Profile'
          component={ProfileScreen}
          options={{
            drawerIcon: ({size, color}) => (
              <Ionicons
                name='person'
                size={size}
                color={color}
              />  
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './container/Mystack';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>  
        <NavigationContainer>
     <MyStack/>
    </NavigationContainer>
    </SafeAreaView>

  )
  };
 


export default App

const styles = StyleSheet.create({})
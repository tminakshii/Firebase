import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'

const Login = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

   const login=()=>{
    auth().signInWithEmailAndPassword(email,password)
    .then((res)=>{
        console.log(res)
        Alert.alert('successfully logged!!')
    })
    .catch(err=>{
        console.log(err)
        Alert.alert(err.nativeErrorMessage)
    })
   }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
      <Text>App</Text>
      <TextInput  style={{borderWidth:1,width:'90%'}}
      value={email}
      placeholder='emailId'
      onChangeText={text=>setEmail(text)}/>
      <TextInput style={{borderWidth:1,width:'90%'}}
      value={password}
      placeholder='Password'
      onChangeText={text=>setPassword(text)}/>

      <Button title='signUp' onPress={login}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Signupscreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const[otp,setOtp]=useState('')


 

  const sendOtp=async ()=>{
    try{
      const confirmation = await auth().signInWithPhoneNumber('+917728047975');
      setConfirm(confirmation)
    }catch(error){
      console.log('error sending',error)
    }
  }
  const submitotp=async()=>{
    try{
      const response=await confirm.confirm(otp);
      const user= response.user;
     
      console.log(response)
      Alert.alert('your number is verified')
    }catch(err){
      console.log(err);
    }
  };
 


  const signUp = () => {
    if (password !== confirmpassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User created! Please login.');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err.message);
        Alert.alert('Error', err.message);
      });
  };

  console.log(confirm, 'confirm');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>App</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder='Email ID'
        autoCapitalize='none'
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder='Password'
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={confirmpassword}
        placeholder='Confirm Password'
        secureTextEntry
        onChangeText={text => setConfirmpassword(text)}
      />
      <Button onPress={signUp} title='Sign Up' />

      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        keyboardType='phone-pad'
        onChangeText={text => setPhone(text)} // Update phone state with user input
      />
      <TouchableOpacity
        style={styles.phoneSignInButton}
        onPress={sendOtp}
      >
        <Text>Get OTP</Text>
      </TouchableOpacity>

     
      <TextInput
       
        style={styles.input}
        placeholder='Enter OTP'
        keyboardType='numeric'
        value={otp} // Bind otp state to input value
        onChangeText={text => setOtp(text)}
      
      />
      <TouchableOpacity
        style={styles.phoneSignInButton}
        onPress={submitotp}
      >
        <Text>submit</Text>
      </TouchableOpacity>

     
    </ScrollView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    width: '90%',
    marginVertical: 10,
    padding: 10,
  },
  phoneSignInButton: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    marginVertical: 10,
  },
});

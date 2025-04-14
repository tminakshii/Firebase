import { createStackNavigator } from '@react-navigation/stack';
import Signupscreen from './Signupscreen';
import Login from './Login';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
              <Stack.Screen name="Signup" component={Signupscreen} />
              <Stack.Screen name="Login" component={Login} />


    </Stack.Navigator>
  );
}
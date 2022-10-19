import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, LogIn, Register, Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

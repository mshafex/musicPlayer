import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

https://reactnavigation.org/docs/hello-react-navigation

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={View} />
    </Stack.Navigator>
  );
};
export default Screens;

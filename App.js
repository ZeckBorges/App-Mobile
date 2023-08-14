import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/homepage';
import Cadastro from './src/pages/cadastro';
import Login from './src/pages/login';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

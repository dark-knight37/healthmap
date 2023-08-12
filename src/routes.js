import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Chart from './pages/Chart';

const AppStack = createStackNavigator();

export default Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Chart" component={Chart} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
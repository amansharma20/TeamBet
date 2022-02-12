import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {

  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}

import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import PrivacyPolicyScreen from '../screens/onBoarding/PrivacyPolicyScreen';
import DetailsMatchScreen from '../screens/detailsMatch/DetailsMatchScreen.js';
import TeamSupportScreen from '../screens/detailsMatch/TeamSupportScreen';
import FootballArticlesScreen from '../screens/footballArticles/FootballArticlesScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        keyboardHidesTabBar: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="DetailsMatchScreen" component={DetailsMatchScreen} />
      <Stack.Screen name="TeamSupportScreen" component={TeamSupportScreen} />
      <Stack.Screen
        name="FootballArticlesScreen"
        component={FootballArticlesScreen}
      />
    </Stack.Navigator>
  );
}

export default App;

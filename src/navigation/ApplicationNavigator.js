import React, {useEffect, useState} from 'react';
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
import WebViewScreen from '../screens/webView/WebViewScreen';
import remoteConfig from '@react-native-firebase/remote-config';
import {initializeApp} from 'firebase/app';
import MyAsyncStorage from '../persistence/storage/MyAsyncStorage';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyCdW3q5RZM871eQLVQ56ZCpzdST36foUAA',
  projectId: 'team-bet',
  appId: '1:907850556787:android:073a676a0904541c5d5106',
};

const app = initializeApp(firebaseConfig);

const ApplicationNavigator = () => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getRemoteConfig = remoteConfig()
  //     .fetchAndActivate()
  //     .then(res => console.log('remote config res: ', res));
  // }, []);

  const [url, setUrl] = useState();
  console.log('url :', url);

  const setLinkLocal = async linkLocal => {
    await MyAsyncStorage.storeData('linkLocal', {
      linkLocal: linkLocal,
    });
  };

  const [linkLocalAsync, setLinkLocalAsync] = useState();
  useEffect(() => {
    async function getLinkLocal() {
      // if (linkLocal !== null)
      const linkLocalAsync = await MyAsyncStorage.getData('linkLocal');
      console.log('linkLocalAsync :', linkLocalAsync?.linkLocal);
      // setLinkLocalAsync(linkLocal?.linkLocal);
      return linkLocalAsync;
    }
    getLinkLocal();
  }, []);

  // {
  //   if (linkLocalAsync == null) {
  //     useEffect(() => {
  //       setIsLoading(true);
  //       const callRemoteConfig = async () => {
  //         await remoteConfig()
  //           .setDefaults({
  //             key1: '',
  //           })
  //           .then(res => {
  //             console.log('Default values set.');
  //             setIsLoading(false);
  //           })
  //           .catch(err => console.log(err));
  //         const value = await remoteConfig().getString('key1');
  //         setUrl(value);
  //         setLinkLocal(value);
  //         console.log('value :', value);
  //         setIsLoading(false);
  //       };
  //       callRemoteConfig();
  //     }, []);
  //   } else console.log('linkLocalAsync not null');
  // }

  useEffect(() => {
    setIsLoading(true);
    const callRemoteConfig = async () => {
      await remoteConfig()
        .fetchAndActivate()
        .then(res => {
          // console.log('getRemoteConfigRes', res);
          setRemoteConfigStatus(res);
        })
        .catch(err => {
          // console.log('remoteConfigErr :', err);
        });
      await remoteConfig()
        .setDefaults({
          key1: '',
        })
        .then(res => {
          console.log('Default values set.');
          setIsLoading(false);
        })
        .catch(err => console.log(err));
      const value = await remoteConfig().getString('key1');
      setUrl(value);
      setLinkLocal(value);
      console.log('value :', value);
      setIsLoading(false);
    };
    callRemoteConfig();
  }, []);

  const [remoteConfigStatus, setRemoteConfigStatus] = useState();

  // useEffect(() => {
  //   const getRemoteConfig = async () => {
  //     await remoteConfig()
  //       .fetchAndActivate()
  //       .then(res => {
  //         // console.log('getRemoteConfigRes', res);
  //         setRemoteConfigStatus(res);
  //       })
  //       .catch(err => {
  //         // console.log('remoteConfigErr :', err);
  //       });
  //   };
  //   getRemoteConfig();
  // }, [url]);

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    setNetStatus(state.isConnected);
  });

  const [netStatus, setNetStatus] = useState();

  useEffect(() => {
    netStatus === false
      ? Alert.alert('No Internet Connection', 'Please connect to the Internet')
      : {};
  }, [netStatus]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        keyboardHidesTabBar: true,
      }}>
      {url !== null ? (
        <>
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name="DetailsMatchScreen"
            component={DetailsMatchScreen}
          />
          <Stack.Screen
            name="TeamSupportScreen"
            component={TeamSupportScreen}
          />
          <Stack.Screen
            name="FootballArticlesScreen"
            component={FootballArticlesScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name="DetailsMatchScreen"
            component={DetailsMatchScreen}
          />
          <Stack.Screen
            name="TeamSupportScreen"
            component={TeamSupportScreen}
          />
          <Stack.Screen
            name="FootballArticlesScreen"
            component={FootballArticlesScreen}
          />
          {/* <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name="DetailsMatchScreen"
            component={DetailsMatchScreen}
          />
          <Stack.Screen
            name="TeamSupportScreen"
            component={TeamSupportScreen}
          />
          <Stack.Screen
            name="FootballArticlesScreen"
            component={FootballArticlesScreen}
          /> */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default ApplicationNavigator;

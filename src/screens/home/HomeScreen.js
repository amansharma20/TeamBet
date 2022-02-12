import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import {initializeApp} from 'firebase/app';
import remoteConfig from '@react-native-firebase/remote-config';

const firebaseConfig = {
  apiKey: 'AIzaSyCdW3q5RZM871eQLVQ56ZCpzdST36foUAA',
  projectId: 'team-bet',
  appId: '1:907850556787:android:073a676a0904541c5d5106',
};

const app = initializeApp(firebaseConfig);

const HomeScreen = () => {
  const awesomeNewFeature = remoteConfig().getAll();
  Object.entries(awesomeNewFeature).forEach($ => {
    const [key, entry] = $;
    console.log('Key: ', key);
    console.log('Source: ', entry.getSource());
    console.log('Value: ', entry.asString());
  });

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        //   key1: '',
      })
      .then(() => {
        console.log('Default values set.');
      });
  }, [awesomeNewFeature]);

  return (
    <View style={commonStyles.container}>
      <StatusBar backgroundColor={'#092D33'} hidden={false} />
      <Text style={commonStyles.h1Text}>yoo</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

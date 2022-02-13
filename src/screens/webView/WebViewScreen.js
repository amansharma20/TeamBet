import {Alert, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import commonStyles from '../../utils/styles/CommonStyles';
import {COLORS} from '../../constants';
import Loading from '../../components/Loading';
import MyAsyncStorage from '../../persistence/storage/MyAsyncStorage';
import {getModel, getAndroidId, getUniqueId} from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
import axios from 'axios';
import {screenHeight, screenWidth} from '../../constants/Layout';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/core';

const WebViewScreen = props => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [linkLocal, setLinkLocal] = useState();
  console.log('link local :', linkLocal);

  useEffect(() => {
    async function getLinkLocal() {
      // if (linkLocal !== null)
      const linkLocal = await MyAsyncStorage.getData('linkLocal');
      setLinkLocal(linkLocal?.linkLocal);
      return linkLocal;
    }
    getLinkLocal();
  }, []);

  const model = getModel();

  const geo = RNLocalize.getCountry();

  const androidId = getUniqueId();

  const getApiUrl = linkLocal + '?' + model + '?' + geo + '?' + androidId;
  const [webViewUrl, setWebViewUrl] = useState();
  console.log('webViewUrl :', webViewUrl);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(getApiUrl);
        if (response.status === 200) {
          console.log('response :', response.data.banner_url);
          setWebViewUrl(response.data.banner_url);
          setIsLoading(false);
          return;
        } else {
          navigation.navigate('HomeScreen');
          // throw new Error('Failed to fetch');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          setIsLoading(false);
        }
      }
    };
    fetchApiData();
  }, [linkLocal]);

  // const [netStatus, setNetStatus] = useState();
  // console.log('netStatus :', netStatus);
  // NetInfo.fetch().then(state => {
  //   console.log('Connection type', state.type);
  //   console.log('Is connected?', state.isConnected);
  //   setNetStatus(state.isConnected);
  // });

  return (
    <View style={commonStyles.container}>
      <StatusBar backgroundColor={COLORS.background} hidden={true} />
      {webViewUrl == undefined ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <View style={{flex: 1}}>
            {/* {netStatus === false ? (
              Alert.alert(
                'No Internet Connection',
                'Please connect to the Internet',
              )
            ) : (
              <View></View>
            )} */}
            <WebView
              thirdPartyCookiesEnabled={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              setBuiltInZoomControls={false}
              allowFileAccess={true}
              // originWhitelist={['*']}
              source={{uri: webViewUrl}}
              startInLoadingState={true}
              renderLoading={() => <Loading />}
              style={{
                overflow: 'hidden',
                width: screenWidth,
                height: screenHeight,
              }}
              containerStyle={{width: screenWidth, height: screenHeight}}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({});

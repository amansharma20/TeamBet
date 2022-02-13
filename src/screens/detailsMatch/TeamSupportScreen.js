import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import {icons, SIZES} from '../../constants';
import {ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

const TeamSupportScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://3d-model.store/netcat_files/multifile/175/211/grb_stl_0011_barselona_cl.png',
          }}
          style={styles.teamIcon}
        />
        <Text style={[commonStyles.h2Text, {alignSelf: 'center'}]}>Win</Text>
        <ProgressBar
          progress={0.75}
          style={{height: 75, borderRadius: 100}}
          color={'#26C000'}
        />
        <Text style={[commonStyles.h2Text, {alignSelf: 'center'}]}>
          900 voices
        </Text>
        <Text
          style={[commonStyles.h2Text, {alignSelf: 'center', marginTop: 40}]}>
          Losing
        </Text>
        <ProgressBar
          progress={0.5}
          style={{height: 75, borderRadius: 100}}
          color={'#DF2020'}
        />
        <Text style={[commonStyles.h2Text, {alignSelf: 'center'}]}>
          450 voices
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '20%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF1919',
              width: 80,
              height: 80,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.like}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#8AFF2E',
              width: 80,
              height: 80,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.like}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TeamSupportScreen;

const styles = StyleSheet.create({
  body: {
    padding: SIZES.paddingHorizontal,
  },
  teamIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backIcon: {width: 20, height: 20, resizeMode: 'cover'},
});

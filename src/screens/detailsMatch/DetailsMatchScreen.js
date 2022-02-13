import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import {icons, images, SIZES} from '../../constants';
import {screenHeight} from '../../constants/Layout';
import {useNavigation} from '@react-navigation/core';

const DetailsMatchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[commonStyles.headerText, {paddingTop: 10}]}>
          Details Match
        </Text>
        <View style={styles.teamHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TeamSupportScreen')}>
            <Image
              source={{
                uri: 'https://3d-model.store/netcat_files/multifile/175/211/grb_stl_0011_barselona_cl.png',
              }}
              style={styles.teamLogo}
            />
          </TouchableOpacity>
          <Image
            source={icons.score}
            s
            style={{width: 100, height: 60, resizeMode: 'contain'}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('TeamSupportScreen')}>
            <Image
              source={{
                uri: 'https://leadersinsport.com/wp-content/uploads/2020/09/arsenal-logo-symbol-arsenal-stl-model-grb-stl-arsenal-21.png',
              }}
              style={styles.teamLogo}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={images.matchGraph}
          style={{
            width: '100%',
            height: screenHeight / 3,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={images.details}
          style={{
            width: '100%',
            height: screenHeight / 2.5,
            resizeMode: 'cover',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DetailsMatchScreen;

const styles = StyleSheet.create({
  backIcon: {width: 20, height: 20, resizeMode: 'cover'},
  body: {
    padding: SIZES.paddingHorizontal,
  },
  teamLogo: {width: 60, height: 60, resizeMode: 'contain'},
  teamHeader: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

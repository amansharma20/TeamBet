import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import {initializeApp} from 'firebase/app';
import {COLORS, images, SIZES} from '../../constants';
import {DATEDATA} from '../../assets/dummyData/dates';
import {screenWidth} from '../../constants/Layout';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const firebaseConfig = {
  apiKey: 'AIzaSyCdW3q5RZM871eQLVQ56ZCpzdST36foUAA',
  projectId: 'team-bet',
  appId: '1:907850556787:android:073a676a0904541c5d5106',
};

const app = initializeApp(firebaseConfig);

const HomeScreen = () => {
  const navigation = useNavigation();
  // Object.entries(awesomeNewFeature).forEach($ => {
  //   const [key, entry] = $;
  //   console.log('Key: ', key);
  //   console.log('Source: ', entry.getSource());
  //   console.log('Value: ', entry.asString());
  // });

  // useEffect(() => {
  //   remoteConfig()
  //     .setDefaults({
  //       key1: '',
  //     })
  //     .then(() => {
  //       console.log('Default values set.');
  //     });
  // }, [awesomeNewFeature]);

  // const awesomeNewFeature = remoteConfig().fetchAndActivate();
  // const value = remoteConfig().getString('key1');
  // console.log('value');
  // console.log(value);
  // console.log('value');

  const DateItem = ({date, month, onPressDate, backgroundColor, textColor}) => {
    return (
      <TouchableOpacity
        onPress={onPressDate}
        style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{date}</Text>
        <Text style={[styles.title, {color: textColor}]}>{month}</Text>
      </TouchableOpacity>
    );
  };

  const [selectedDate, setSelectedDate] = useState(1);

  const renderDateItem = ({item}) => {
    const backgroundColor =
      item.date === selectedDate ? COLORS.orange : COLORS.background;
    const color = item.date === selectedDate ? 'white' : COLORS.darkBlue;

    return (
      <DateItem
        onPressDate={() => setSelectedDate(item.date)}
        date={item.date}
        month={item.month}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      team1: 'FC Barcelona',
      team1Logo:
        'https://3d-model.store/netcat_files/multifile/175/211/grb_stl_0011_barselona_cl.png',
      team2: 'Arsenal F.C.',
      team2Logo:
        'https://leadersinsport.com/wp-content/uploads/2020/09/arsenal-logo-symbol-arsenal-stl-model-grb-stl-arsenal-21.png',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      team1: 'Chelsea F.C.',
      team1Logo:
        'https://i.pinimg.com/originals/26/62/b5/2662b587d0e453007f16272aa7b42ba6.png',
      team2: 'Red Star Belgrade F.C.',
      team2Logo:
        'https://www.clipartkey.com/mpngs/m/170-1706150_red-star-belgrade-logo-pes.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      team1: 'Manchester City F.C.',
      team1Logo:
        'https://p1.hiclipart.com/preview/203/356/862/premier-league-logo-manchester-manchester-city-fc-organization-line-area-circle-symbol-png-clipart.jpg',
      team2: 'West Ham United F.C.',
      team2Logo:
        'http://boxtoboxfootball.uk/wp-content/uploads/2016/08/West_Ham_United_FC_logo.svg_.png',
    },
  ];

  const Item = ({team1, team2, team1Logo, team2Logo}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsMatchScreen')}
      activeOpacity={0.8}
      style={styles.trendingItemContainer}>
      <View>
        <View
          style={[
            styles.teamContainer,
            {borderRightWidth: 1, flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Image source={{uri: team1Logo}} style={styles.teamLogo} />
          <Text style={styles.teamText}>{team1}</Text>
        </View>
        <View
          style={{
            borderRightWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={{uri: team2Logo}} style={styles.teamLogo} />
          <Text style={styles.teamText}>{team2}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{color: 'green', fontWeight: '700', fontSize: 16}}>2</Text>
        <Text style={{color: '#3D618F'}}>35:43</Text>
        <Text style={{color: 'red', fontWeight: '700', fontSize: 16}}>1</Text>
      </View>
    </TouchableOpacity>
  );

  const ItemTable = ({team1, team2, team1Logo, team2Logo}) => (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '80%',
          borderBottomWidth: 1,
          borderColor: '#7DB3FF',
          borderRightWidth: 1,
        }}>
        <View
          style={[
            styles.teamContainer,
            {flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Image source={{uri: team1Logo}} style={styles.teamLogo} />
          <Text style={styles.teamText}>{team1}</Text>
        </View>
        <View
          style={{
            borderRightWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={{uri: team2Logo}} style={styles.teamLogo} />
          <Text style={styles.teamText}>{team2}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderBottomWidth: 1,
          borderColor: '#7DB3FF',
        }}>
        <Text style={{color: 'green', fontWeight: '700', fontSize: 16}}>2</Text>
        <Text style={{color: '#3D618F'}}>35:43</Text>
        <Text style={{color: 'red', fontWeight: '700', fontSize: 16}}>1</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      team1={item.team1}
      team2={item.team2}
      team1Logo={item.team1Logo}
      team2Logo={item.team2Logo}
    />
  );

  const renderItemTable = ({item}) => (
    <ItemTable
      team1={item.team1}
      team2={item.team2}
      team1Logo={item.team1Logo}
      team2Logo={item.team2Logo}
    />
  );

  return (
    <View style={commonStyles.container}>
      <StatusBar backgroundColor={COLORS.background} hidden={false} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.h1Text}>Football</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FootballArticlesScreen')}
            style={styles.articleContainer}>
            <Text style={[styles.h4Text, {alignSelf: 'center'}]}>articles</Text>
          </TouchableOpacity>
          <Image
            source={images.likeDislike}
            style={{width: '20%', height: 30, resizeMode: 'contain'}}
          />
        </View>
        <View style={{}}>
          <FlatList
            data={DATEDATA}
            renderItem={renderDateItem}
            keyExtractor={item => item.date}
            horizontal={true}
          />
        </View>
        <View style={styles.trendingFlatlistContainer}>
          <Text style={commonStyles.h4Text}>Trending Matches</Text>
          <TouchableOpacity>
            <Text
              style={[
                commonStyles.h4Text,
                {color: COLORS.darkBlue, fontSize: 12},
              ]}>
              View ALL
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.trendingFlatlistContainer}>
          <Text style={commonStyles.h4Text}>England: Premier League</Text>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItemTable}
            keyExtractor={item => item.id}
            contentContainerStyle={{marginHorizontal: 16}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: COLORS.orange,
    width: '20%',
    borderRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '10%',
    paddingHorizontal: SIZES.paddingHorizontal,
  },
  item: {
    backgroundColor: COLORS.background,
    borderRadius: 100,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
  },
  title: {
    fontSize: 12,
    color: COLORS.darkBlue,
  },
  teamText: {
    fontSize: 12,
    color: COLORS.darkBlue,
    padding: 20,
  },
  trendingFlatlistContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  trendingItemContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  teamContainer: {
    borderColor: 'lightgrey',
    width: screenWidth / 2,
  },
  teamLogo: {width: 40, height: 40, resizeMode: 'contain', marginLeft: 10},
});

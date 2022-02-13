import {Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../../utils/styles/CommonStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/core';
import {COLORS} from '../../constants';

const PrivacyPolicyScreen = () => {
  const [checkBoxState, setCheckBoxState] = useState(false);
  console.log(checkBoxState);
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('HomeScreen');
  const showAlert = () => Alert.alert('Please mark the checkbox');
  return (
    <View style={commonStyles.container}>
      <StatusBar backgroundColor={COLORS.background} hidden={false} />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text style={styles.headerText}>PrivacyPolicy</Text>

        <Text style={styles.bodyText}>
          A. Introduction{`\n`}
          1. The privacy of visitors to our app Team Bet is very important to us
          and we are committed to protecting it. The privacy policy contains a
          description of the processing of personal information.{`\n`}
          {`\n`}
          B. Collection of personal information{`\n`}
          The following types of personal data may be collected, stored and
          used:
          {`\n`}
          1. information about your device, including your IP address,{`\n`}
          geographic location, phone type and version,{`\n`}
          and operating system, bid number device;{`\n`}
          2. Information such as your email address;{`\n`}
          3. Information you enter when you create a profile on{`\n`}
          our app, such as your name, profile photos,{`\n`}
          gender, birthday;{`\n`}
          4. information you enter when using the services in our application;
          {`\n`}
          5. information relating to anything you purchase, services you use, or
          transactions you make through our application, including your name,
          address, phone number, email address; 6. any other personal
          information you send to us.
        </Text>
        <View>
          <BouncyCheckbox
            size={25}
            fillColor={COLORS.background}
            unfillColor="#062128"
            text="I agree with the Privacy Policy"
            iconStyle={{borderColor: 'white'}}
            textStyle={{textDecorationLine: 'none', color: 'white'}}
            onPress={() => setCheckBoxState(!checkBoxState)}
            style={{alignSelf: 'center'}}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignSelf: 'center', height: '12%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicyScreen')}
            style={[
              styles.btnContainer,
              {
                backgroundColor: COLORS.background,
                borderWidth: 1,
                borderColor: COLORS.orange,
              },
            ]}>
            <Text style={[commonStyles.h2Text, {color: COLORS.orange}]}>
              Decline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // disabled={!checkBoxState}
            onPress={checkBoxState === true ? nextScreen : showAlert}
            style={[
              styles.btnContainer,
              {
                backgroundColor:
                  checkBoxState === true ? COLORS.orange : '#8D8D8D',
              },
            ]}>
            <Text
              style={[
                commonStyles.h2Text,
                {
                  color: checkBoxState === true ? 'white' : '#000',
                },
              ]}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  headerText: {
    color: '#133FF6',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: '700',
  },
  bodyText: {
    textAlign: 'left',
    paddingHorizontal: 20,
    // paddingVertical: '10%',
  },

  btnContainer: {
    backgroundColor: '#F38022',
    marginHorizontal: '4%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginBottom: '10%',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import screens from 'react-native-screens';
import 'react-native-gesture-handler';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import ProfileScreen from './ProfileScreen';
//import RegistrationScreen from './RegistrationScreen';
import MapScreen from './MapScreen';
import ComplainsScreen from './ComplainsScreen';
import RegisteredComplains from './RegisteredComplains';
//import FeedbackScreen from './FeedbackScreen';
import CompletedJob from './CompletedJob';
import IsLoadingCoords from './isLoadingCoords';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        backgroundColor: '#02584d',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: 100,
          height: 200,
          borderRadius: 12,
        }}
        source={require('../assets/img.png')}
      />
    </View>

    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Profile: ProfileScreen,
    Map: MapScreen,
    Complains: ComplainsScreen,
    RegisteredComplains: RegisteredComplains,
    CompletedJob: CompletedJob,
    loading: IsLoadingCoords,
    //Feedback: FeedbackScreen,
  },
  {
    contentComponent: CustomDrawerComponent,
  },
);

const DashboardScreen = createAppContainer(DrawerNavigator);

export default DashboardScreen;

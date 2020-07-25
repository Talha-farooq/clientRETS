/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
<<<<<<< HEAD
import {StyleSheet, ScrollView, View, Image} from 'react-native';
=======
import { StyleSheet, ScrollView, View,Text, Image} from 'react-native';
>>>>>>> 45c8ce40afeaecfd699b1c93af2eae058d2ad917
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
    Profile:{screen: ProfileScreen, navigationOptions:{title: "Profile"}},
    Map: MapScreen,
    Complains: ComplainsScreen,
<<<<<<< HEAD
    RegisteredComplains: RegisteredComplains,
    CompletedJob: CompletedJob,
    loading: IsLoadingCoords,
=======
    RegisteredComplains:{screen:RegisteredComplains,  navigationOptions:{title: "Pending jobs"}},
    CompletedJob : {screen:CompletedJob,  navigationOptions:{title: "Completed Jobs"   }},
>>>>>>> 45c8ce40afeaecfd699b1c93af2eae058d2ad917
    //Feedback: FeedbackScreen,
  },
  {
    contentComponent: CustomDrawerComponent,
  },
);

const DashboardScreen = createAppContainer(DrawerNavigator);

export default DashboardScreen;

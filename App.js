import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LoadingScreen from './screens/LoadingScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ComplainDetail from './screens/ComplainDetail';
import CompletedJob from './screens/CompletedJob';
import CompletedComplainDetail from './screens/CompletedComplainDetail';
import Mapslocation from './screens/Mapslocation';
import jobs from './screens/jobs';
import pending from './screens/pending';
import completed from './screens/completed';

import LoadingScreenMiddle from './screens/loadingScreenmiddle';

import LogoScreen from './screens/LogoScreen';
console.disableYellowBox = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <switchNav />;
  }
}
const AppNavigator = createStackNavigator({
  //Logo: {screen: LogoScreen ,  navigationOptions: { headerShown: false, }},
  Login: {screen: LoginScreen, navigationOptions: {headerBackImage: false}},
  Signup: {screen: SignupScreen},
});

const switchNav = createSwitchNavigator({
  Logo: {screen: LogoScreen, navigationOptions: {headerShown: false}},
  loader: {
    screen: LoadingScreenMiddle,
    navigationOptions: {headerShown: false},
  },
  Loading: {screen: LoadingScreen},

  Complain: {screen: ComplainDetail, navigationOptions: {headerShown: false}},
  // CompletedJob : {screen: CompletedJob},
  CompletedComplainDetail: {screen: CompletedComplainDetail},
  Feedback: {screen: FeedbackScreen},
  Mapslocation: {screen: Mapslocation},
  jobs: {screen: jobs},
  pending: {screen: pending, navigationOptions: {headerShown: false}},
  completed: {screen: completed, navigationOptions: {headerShown: false}},

  stack: AppNavigator,
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {headerShown: false},
  },
});
export default createAppContainer(switchNav);

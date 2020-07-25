// // import React from 'react';
// // //import Login from 'react';

// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   Alert,
// //   Image,
// //   ActivityIndicator,
// //   TouchableOpacity,
// // } from 'react-native';
// // import {
// //   GoogleSignin,
// //   GoogleSigninButton,
// //   statusCodes,
// // } from 'react-native-google-signin';
// // //import Login from 'react';




 
// // export default class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       userInfo: null,
// //     gettingLoginStatus: true,
// //     };
// //   }
  
  
 
// //   componentDidMount() {
// //     //initial configuration
// //     GoogleSignin.configure({
// //       //It is mandatory to call this method before attempting to call signIn()
// //       scopes: ['https://www.googleapis.com/auth/drive.readonly'],
// //       // Repleace with your webClientId generated from Firebase console
// //       webClientId: '965271215247-r3g0259b0vpfknrhgrj7e0felio30pco.apps.googleusercontent.com',
// //     });
// //     //Check if user is already signed in
// //     this._isSignedIn();
// //   }
 
// //   _isSignedIn = async () => {
// //     const isSignedIn = await GoogleSignin.isSignedIn();
// //     if (isSignedIn) {
// //       alert('User is already signed in');
// //       //Get the User details as user is already signed in
// //       this._getCurrentUserInfo();
// //     } else {
// //       //alert("Please Login");
// //       console.log('Please Login');
// //     }
// //     this.setState({ gettingLoginStatus: false });
// //   };
 
// //   _getCurrentUserInfo = async () => {
// //     try {
// //       const userInfo = await GoogleSignin.signInSilently();
// //       console.log('User Info --> ', userInfo);
// //       this.setState({ userInfo: userInfo });
// //     } catch (error) {
// //       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
// //         alert('User has not signed in yet');
// //         console.log('User has not signed in yet');
// //       } else {
// //         alert("Something went wrong. Unable to get user's info");
// //         console.log("Something went wrong. Unable to get user's info");
// //       }
// //     }
// //   };
 
// //   _signIn = async () => {
// //     //Prompts a modal to let the user sign in into your application.
// //     try {
// //       await GoogleSignin.hasPlayServices({
// //         //Check if device has Google Play Services installed.
// //         //Always resolves to true on iOS.
// //         showPlayServicesUpdateDialog: true,
// //       });
// //       const userInfo = await GoogleSignin.signIn();
// //       console.log('User Info --> ', userInfo);
// //       this.setState({ userInfo: userInfo });
// //     } catch (error) {
// //       console.log('Message', error.message);
// //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
// //         console.log('User Cancelled the Login Flow');
// //       } else if (error.code === statusCodes.IN_PROGRESS) {
// //         console.log('Signing In');
// //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
// //         console.log('Play Services Not Available or Outdated');
// //       } else {
// //         console.log('Some Other Error Happened');
// //       }
// //     }
// //   };
 
// //   _signOut = async () => {
// //     //Remove user session from the device.
// //     try {
// //       await GoogleSignin.revokeAccess();
// //       await GoogleSignin.signOut();
// //       this.setState({ userInfo: null }); // Remove the user from your app's state as well
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   render(){ 
    
// //    return(<Text>Hello, world!</Text>);

// //   }
  

// //   render() {
// //     //returning Loader untill we check for the already signed in user
// //     if (this.state.gettingLoginStatus) {
// //       return (

// //         <View style={styles.container}>
        
// //            <ActivityIndicator size="large" color="#0000ff" />
// //         </View>
        
// //       );
// //     } else {
// //       if (this.state.userInfo != null) {
// //         //Showing the User detail
// //         return (
          
// //           <View style={styles.container}>
// //             <Image
// //               source={{ uri: this.state.userInfo.user.photo }}
// //               style={styles.imageStyle}
// //             />
// //             <Text style={styles.text}>
// //               Name: {this.state.userInfo.user.name}{' '}
// //             </Text>
// //             <Text style={styles.text}>
// //               Email: {this.state.userInfo.user.email}
// //             </Text>
// //             <TouchableOpacity style={styles.button} onPress={this._signOut}>
// //               <Text>Logout</Text>
// //             </TouchableOpacity>
// //           </View>
// //         );
// //       } else {
// //         //For login showing the Signin button
// //         return (
// //           <View style={styles.container}>
// //             <GoogleSigninButton
// //               style={{ width: 312, height: 48 }}
// //               size={GoogleSigninButton.Size.Wide}
// //               color={GoogleSigninButton.Color.Light}
// //               onPress={this._signIn}
// //             />
// //           </View>
// //         );
      
// //       }
// //     }
// //   }
// // }
 
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
  
// //   },
// //   imageStyle: {
// //     width: 200,
// //     height: 300,
// //     resizeMode: 'contain',
// //   },
// //   button: {
// //     alignItems: 'center',
// //     backgroundColor: '#DDDDDD',
// //     padding: 10,
// //     width: 300,
// //     marginTop: 30,
// //   },
// // });


// //import React, { Fragment } from 'react';
// // import LoginController from './LoginController';

// // import React, { Component } from 'react';
// // import { View, Text } from 'react-native';


// // class App extends React.Component
// //   const App = () => {return (<LoginController/>);};
// //   export default App;
// import 'react-native-gesture-handler';
// import React, { Component } from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// //import LoginController from './LoginController';
// import DashboardScreen from './screens/DashboardScreen';

// import { View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   TextInput,} from 'react-native';

// //class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //   };
//   // }
//   class App extends React.Component {
//     static navigationOptions = {
      
//        title: 'LOGIN',
//        headerStyle: 
//         {backgroundColor: '#02584d'},
//     headerTitleStyle: {color: '#fff'},
       
//     };
//     goTo = () => {
//       this.props.navigation.navigate('Dashboard');
//     };
//     goTo1 = () => {
//       this.props.navigation.navigate('Registration');
//     };

//   render() {
//     return (
      
       
//       <View style={styles.backgroutMajor}>
//       <View>
//         <Image
//           style={{
//             width: 250,
//             height: 300,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           source={require('./assets/img.png')}
//         />
//       </View>
//       <View>
//         <TextInput
//           style={styles.inputBox}
//           underlineColorAndroid="black"
//           placeholder="Email"
//           placeholderTextColor="#black"
//           selectionColor="fff"
//           keyboardType="email-address"
//           onSubmitEditing={() => this.password.focus()}
//         />
//         <TextInput
//           style={styles.inputBox}
//           underlineColorAndroid="black"
//           placeholder="Password"
//           secureTextEntry={true}
//           placeholderTextColor="#black"
//           ref={input => (this.password = input)}
//         />

//         <TouchableOpacity onPress={this.goTo} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <Text> Don't Have an account </Text>
//         <TouchableOpacity onPress={this.goTo1} style={styles.button1}>
//           <Text style={styles.buttonText1}>Sign Up?</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// }

// const AppNavigator = createStackNavigator({
// AppScreen: {screen: App},

// Dashboard: {
//   screen: DashboardScreen,
//   navigationOptions: {
//     header: null,
//   },
// },
// });
// const styles = StyleSheet.create({
// backgroutMajor: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'white'
// },
// inputBox: {
//   width: 300,
//   backgroundColor: '#fff',
//   borderRadius: 25,
//   paddingHorizontal: 16,
//   fontSize: 16,
//   color: 'black',
//   marginVertical: 10,
// },
// button: {
//   width: 300,
//   backgroundColor: '#439889',
//   borderRadius: 25,
//   marginVertical: 23,
//   paddingVertical: 15,
// },
// button1: {
//  // placeholderTextColor:'black',
//  width: 300,
//   //backgroundColor: 'white',
//   borderRadius: 25,
//   marginVertical: 23,
//   paddingVertical: 15,
// },
// buttonText1:{
//   fontSize: 16,
//   fontWeight: '500',
//   color: 'black',
//   textAlign: 'center',
// },
// buttonText: {
//   fontSize: 16,
//   fontWeight: '500',
//   color: 'white',
//   textAlign: 'center',
// },
// });
// // export default App;
// export default createAppContainer(AppNavigator);






// import React from 'react';
// //import Login from 'react';

// import {
//   StyleSheet,
//   Text,
//   View,
//   Alert,
//   Image,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from 'react-native-google-signin';
// //import Login from 'react';




 
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: null,
//     gettingLoginStatus: true,
//     };
//   }
  
  
 
//   componentDidMount() {
//     //initial configuration
//     GoogleSignin.configure({
//       //It is mandatory to call this method before attempting to call signIn()
//       scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//       // Repleace with your webClientId generated from Firebase console
//       webClientId: '965271215247-r3g0259b0vpfknrhgrj7e0felio30pco.apps.googleusercontent.com',
//     });
//     //Check if user is already signed in
//     this._isSignedIn();
//   }
 
//   _isSignedIn = async () => {
//     const isSignedIn = await GoogleSignin.isSignedIn();
//     if (isSignedIn) {
//       alert('User is already signed in');
//       //Get the User details as user is already signed in
//       this._getCurrentUserInfo();
//     } else {
//       //alert("Please Login");
//       console.log('Please Login');
//     }
//     this.setState({ gettingLoginStatus: false });
//   };
 
//   _getCurrentUserInfo = async () => {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       console.log('User Info --> ', userInfo);
//       this.setState({ userInfo: userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//         alert('User has not signed in yet');
//         console.log('User has not signed in yet');
//       } else {
//         alert("Something went wrong. Unable to get user's info");
//         console.log("Something went wrong. Unable to get user's info");
//       }
//     }
//   };
 
//   _signIn = async () => {
//     //Prompts a modal to let the user sign in into your application.
//     try {
//       await GoogleSignin.hasPlayServices({
//         //Check if device has Google Play Services installed.
//         //Always resolves to true on iOS.
//         showPlayServicesUpdateDialog: true,
//       });
//       const userInfo = await GoogleSignin.signIn();
//       console.log('User Info --> ', userInfo);
//       this.setState({ userInfo: userInfo });
//     } catch (error) {
//       console.log('Message', error.message);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User Cancelled the Login Flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Signing In');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log('Play Services Not Available or Outdated');
//       } else {
//         console.log('Some Other Error Happened');
//       }
//     }
//   };
 
//   _signOut = async () => {
//     //Remove user session from the device.
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       this.setState({ userInfo: null }); // Remove the user from your app's state as well
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   render(){ 
    
//    return(<Text>Hello, world!</Text>);

//   }
  

//   render() {
//     //returning Loader untill we check for the already signed in user
//     if (this.state.gettingLoginStatus) {
//       return (

//         <View style={styles.container}>
        
//            <ActivityIndicator size="large" color="#0000ff" />
//         </View>
        
//       );
//     } else {
//       if (this.state.userInfo != null) {
//         //Showing the User detail
//         return (
          
//           <View style={styles.container}>
//             <Image
//               source={{ uri: this.state.userInfo.user.photo }}
//               style={styles.imageStyle}
//             />
//             <Text style={styles.text}>
//               Name: {this.state.userInfo.user.name}{' '}
//             </Text>
//             <Text style={styles.text}>
//               Email: {this.state.userInfo.user.email}
//             </Text>
//             <TouchableOpacity style={styles.button} onPress={this._signOut}>
//               <Text>Logout</Text>
//             </TouchableOpacity>
//           </View>
//         );
//       } else {
//         //For login showing the Signin button
//         return (
//           <View style={styles.container}>
//             <GoogleSigninButton
//               style={{ width: 312, height: 48 }}
//               size={GoogleSigninButton.Size.Wide}
//               color={GoogleSigninButton.Color.Light}
//               onPress={this._signIn}
//             />
//           </View>
//         );
      
//       }
//     }
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
  
//   },
//   imageStyle: {
//     width: 200,
//     height: 300,
//     resizeMode: 'contain',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: 300,
//     marginTop: 30,
//   },
// });


//import React, { Fragment } from 'react';
// import LoginController from './LoginController';

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';


// class App extends React.Component
//   const App = () => {return (<LoginController/>);};
//   export default App;





////////////////////////////////////////////////////////////////////////////////////////////////
// import 'react-native-gesture-handler';
// import React, { Component } from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import SignupScreen from './screens/SignupScreen';
// import DashboardScreen from './screens/DashboardScreen';
// //import RegistrationScreen from './screens/RegistrationScreen';

// import { View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   TextInput,} from 'react-native';

// //class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //   };
//   // }
//   class App extends React.Component {
//     static navigationOptions = {
      
//        title: 'LOGIN',
//        headerStyle: 
//         {backgroundColor: '#02584d'},
//     headerTitleStyle: {color: '#fff'},
       
//     };
//     goTo = () => {
//       this.props.navigation.navigate('Dashboard');
//     };
//     goTo1 = () => {
//       this.props.navigation.navigate('Signup');
//     };

//   render() {
//     return (
      
       
//       <View style={styles.backgroutMajor}>
//       <View>
//         <Image
//           style={{
//             width: 250,
//             height: 300,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           source={require('./assets/img.png')}
//         />
//       </View>
//       <View>
//         <TextInput
//           style={styles.inputBox}
//           underlineColorAndroid="black"
//           placeholder="Email"
//           placeholderTextColor="#black"
//           selectionColor="fff"
//           keyboardType="email-address"
//           onSubmitEditing={() => this.password.focus()}
//         />
//         <TextInput
//           style={styles.inputBox}
//           underlineColorAndroid="black"
//           placeholder="Password"
//           secureTextEntry={true}
//           placeholderTextColor="#black"
//           ref={input => (this.password = input)}
//         />

//         <TouchableOpacity onPress={this.goTo} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <Text> Don't Have an account </Text>
//         <TouchableOpacity onPress={this.goTo1} style={styles.button1}>
//           <Text style={styles.buttonText1}>Sign In?</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// }

// const AppNavigator = createStackNavigator({
// AppScreen: {screen: App},
// //SignupScreen:{screen: Signup},

// Dashboard: {
//   screen: DashboardScreen,
//   navigationOptions: {
//     header: null,
//   },
// },
// });
// const styles = StyleSheet.create({
// backgroutMajor: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'white'
// },
// inputBox: {
//   width: 300,
//   backgroundColor: '#fff',
//   borderRadius: 25,
//   paddingHorizontal: 16,
//   fontSize: 16,
//   color: 'black',
//   marginVertical: 10,
// },
// button: {
//   width: 300,
//   backgroundColor: '#439889',
//   borderRadius: 25,
//   marginVertical: 23,
//   paddingVertical: 15,
// },
// button1: {
//  // placeholderTextColor:'black',
//  width: 300,
//   //backgroundColor: 'white'
//   //underline : 'black',
//   borderRadius: 25,
//   marginVertical: 23,
//   paddingVertical: 15,
// },

// buttonText: {
//   fontSize: 16,
//   fontWeight: '500',
//   color: 'white',
//   textAlign: 'center',
// },
// });
// // export default App;
// export default createAppContainer(AppNavigator);

/////////////////////////////////////////////////////////////////////////////////////////////

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





import LogoScreen from './screens/LogoScreen';

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
  Signup:{screen: SignupScreen},
  

});

const switchNav = createSwitchNavigator({
  Logo: {screen: LogoScreen ,  navigationOptions: { headerShown: false, }},

  Loading: {screen: LoadingScreen},

 
  Complain: { screen: ComplainDetail,  navigationOptions: { headerShown: false,  } },
 // CompletedJob : {screen: CompletedJob},
  CompletedComplainDetail : {screen: CompletedComplainDetail},
  Feedback: {screen :FeedbackScreen},
  Mapslocation: {screen : Mapslocation},
  jobs: {screen : jobs},
  pending: {screen: pending, navigationOptions: {headerShown: false}},
  completed: {screen: completed, navigationOptions: {headerShown: false}},



  stack: AppNavigator,
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {headerShown: false
    },
  },
 
});
export default createAppContainer(switchNav);





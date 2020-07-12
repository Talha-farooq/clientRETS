import React, {Component} from 'react';
import App from 'react';
import AsyncStorage from '@react-native-community/async-storage';


//import {View, Text} from 'react-native';
import { View,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,} from 'react-native';
  import IconEnt from 'react-native-vector-icons/Entypo';


class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      ph_number:'',
      address:'',
      pass:'',
      cpass:'',

    };
  }

  signup = () => {
    fetch('http://rets.codlers.com/api/client/regcli.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:this.state.name,
        email: this.state.email,
         ph_number:this.state.ph_number,
         address:this.state.address,
         pass:this.state.pass,
         cpass:this.state.cpass,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson['error'] != undefined) {
          alert(responseJson.error);
          console.log(responseJson);


        } else if (responseJson['message'] != undefined) {
          //this.storeData();
         console.log(responseJson);
          this.props.navigation.navigate('Login');
          ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
          ToastAndroid.showWithGravity(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        }
      })
      .catch(error => {
        alert(error);
      });
  };
  // storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('isLoggedIn', '1');
  //   } catch (e) {
  //     console.error(error);
  //   }
  // };
  
  // goTo = () => {
  //   this.goBack = this.goBack.bind(App)
  //   };
//   goBack() {
//     this.props.navigation.goBack('null')
// }
  render() {
    return (
      <View style={styles.backgroutMajor}>
      <View>
        <Image
          style={{
            width: 100,
            height: 110,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={require('../assets/img.png')}
        />
      </View>
      <View>
      <View style={styles.IconEntStyle1}>
              < IconEnt
                name="user"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="Name"
          placeholderTextColor="black"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.state.focus()}
          onChangeText={name => this.setState({name})}
        />
        <View style={styles.IconEntStyle1}>
              < IconEnt
                name="mail"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="Email"
          placeholderTextColor="black"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={email => this.setState({email})}
        />
        <View style={styles.IconEntStyle1}>
              < IconEnt
                name="phone"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="phone number"
          placeholderTextColor="black"
          selectionColor="#fff"
          keyboardType="phone-pad"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={ph_number => this.setState({ph_number})}
          
        />
        <View style={styles.IconEntStyle1}>
              < IconEnt
                name="home"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="Address"
          placeholderTextColor="black"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={address => this.setState({address})}
        />
        <View style={styles.IconEntStyle1}>
              < IconEnt
                name="lock"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          ref={input => (this.password = input)}
          onChangeText={pass => this.setState({pass})}
        />
        <View style={styles.IconEntStyle1}>
              < IconEnt
                name="eye"
                style={styles.IconEntStyle}
                size={21}
                
              />
              </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="black"
          placeholder="Conform Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          ref={input => (this.password = input)}
          onChangeText={cpass => this.setState({cpass})}

        />
</View>
<View>
        <TouchableOpacity  
          onPress={this.signup}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}




const styles = StyleSheet.create({
  backgroutMajor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  inputBox: {
    width: 300,
    //backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: '13%',
    fontSize: 16,
    color: 'black',
    marginVertical: '8%',
  },
  button: {
    width: 200,
    backgroundColor: '#439889',
    borderRadius: 45,
    marginVertical: 25,
    paddingVertical: 13,
    marginHorizontal :40
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  IconEntStyle:{
   marginBottom: '-100%',
    color: '#439889',
    marginHorizontal: '4%',
    marginVertical: '0%'
  },
  IconEntStyle1: {
    marginBottom: '-11%'
  }
  });
 export default SignupScreen;




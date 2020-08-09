import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-community/async-storage';

import React, {Component} from 'react';
import App from 'react';
import IconEnt from 'react-native-vector-icons/Entypo';

//import {View, Text} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

class ComplainsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      cid: '',
      address: '',
      description: '',
    };
  }
  //  goTo = () => {
  //   Alert.alert(
  //       'Your Complain Submitted Successfully',
  //       //this.props.navigation.navigate('Profile')
  //    )
  //    };

  async componentDidMount() {
    try {
      const cid = await AsyncStorage.getItem('cid');
      // alert(token);
      this.setState({cid: cid});
      this.getData();
      // this.getCoords = setInterval(this.getData, 1000);
      // this.getCoords = setInterval(this.getData, 10000);
    } catch (e) {
      console.error(error);
    }
  }
  getData = () => {
    Geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.setState({lng: lng});
        this.setState({lat: lat});
        console.log(this.state.lat);
        console.log(this.state.lng);
        // console.log(this.state.address)
        // console.log(this.state.description)
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  //watchID = null;
  sendData = () => {
    fetch('https://jhnerd.com/rets/api/client/jobcreate.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cid: this.state.cid,
        address: this.state.address,
        description: this.state.description,
        longitude: this.state.lng,
        latitude: this.state.lat,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson['message'] != undefined) {
          // alert(responseJson.message);
          console.log(responseJson.message);
          // console.log(this.state.lat);
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <IconEnt name="menu" style={styles.IconEntStyle} size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Register Your Complain</Text>
          </View>
        </View>
        {/* <Text style={styles.complaintext}>COMPLAIN PAGE</Text> */}
        <View style={styles.Image}>
          <Image
            style={{
              width: 70,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../assets/img.png')}
          />
        </View>
        {/* <Text style={styles.complaintext}>COMPLAIN PAGE</Text> */}
        <View>
          <TextInput
            style={styles.inputBox1}
            underlineColorAndroid="black"
            placeholder="Address"
            placeholderTextColor="black"
            selectionColor="#fff"
            keyboardType="email-address"
            // onSubmitEditing={() => this.password.focus()}
            onChangeText={address => this.setState({address})}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="transparent"
            //underlineColorAndroid="black"

            placeholder="About Complain"
            secureTextEntry={false}
            placeholderTextColor="black"
            //onSubmitEditing={() => this.password.focus()}
            onChangeText={description => this.setState({description})}
          />

          <TouchableOpacity onPress={this.sendData} style={styles.button}>
            <Text style={styles.buttonText}>Submitt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#02584d',
    height: 70,
    flexDirection: 'row',

    //justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    //backgroundColor: '#fff',
    //borderRadius: 25,
    padding: 10,
    justifyContent: 'flex-start',
    paddingTop: 0,
    fontSize: 16,
    color: 'black',
    marginVertical: 30,
    alignSelf: 'center',
    borderWidth: 1,
    height: 200,
  },
  inputBox1: {
    width: 300,
    //backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'black',
    marginVertical: 13,
    alignSelf: 'center',
  },

  button: {
    width: 200,
    backgroundColor: '#439889',
    borderRadius: 45,
    marginVertical: 15,
    paddingVertical: 14,
    marginHorizontal: 40,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  headerTextWrapper: {
    marginHorizontal: 30,
    marginTop: 25,
    marginLeft: 34,
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
  },

  iconWrapper: {
    marginTop: 27,
    marginLeft: 5,
  },
  IconEntStyle: {
    color: '#fff',
  },
  Image: {
    // width: 130,
    // height: 130,
    //borderRadius: 63,
    //borderWidth: 4,
    //borderColor: "white",
    //marginBottom:10,
    alignSelf: 'center',
    //position: 'absolute',
    marginTop: 25,
  },
});
export default ComplainsScreen;

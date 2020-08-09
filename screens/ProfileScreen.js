import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import DrawerActions from 'react-navigation';
import IconEnt from 'react-native-vector-icons/Entypo';
import messaging from '@react-native-firebase/messaging';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    //this._loadData();
    this.state = {
      name: '',
      cid: '',
      total: '',
      completed: '',
      pending: '',
    };
  }
  async componentDidMount() {
    try {
      const cid = await AsyncStorage.getItem('cid');
      const name = await AsyncStorage.getItem('name');

      this.setState({cid: cid});
      this.setState({name: name});

      console.log(this.state.cid);
      this.getFcmToken();
      this.forGround();
      this.jobInfo();

      //alert(name);

      //alert(this.state.name);
    } catch (e) {
      console.error(error);
    }
  }

  jobInfo = () => {
    fetch('https://jhnerd.com/rets/api/client/profiledata.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.cid,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          total: responseJson['count'],
        });
        this.setState({
          pending: responseJson['pendingCount'],
        });
        this.setState({
          completed: responseJson['completedCount'],
        });
      })
      .finally(() => this.setState({isLoading: false}))
      .catch(error => {
        console.error(error);
      });
  };

  async getFcmToken() {
    let fcmToken = await AsyncStorage.getItem('fcm');
    fetch('https://jhnerd.com/rets/api/client/fcmtoken.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fcm: fcmToken,
        cid: this.state.cid,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Message);
      })
      .catch(error => {
        // alert(error);
      });
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcm', fcmToken);
      }
    }
    this.setState({fcmToken: fcmToken});
    console.log('fcm:', this.state.fcmToken);
  }

  forGround = () => {
    messaging().onMessage(async remoteMessage => {
      //if(remoteMessage.data.hasOwnProperty('type')){

      if (remoteMessage.data.rets == 'job') {
        //alert(remoteMessage.data.rets);
        this.props.navigation.navigate('loader', {
          job_id: remoteMessage.data.job_id,
          lat_cli: remoteMessage.data.lat_cli,
          lng_cli: remoteMessage.data.lng_cli,
          lat_emp: remoteMessage.data.lat_emp,
          lng_emp: remoteMessage.data.lng_emp,
        });
      } else if (remoteMessage.data.rets == 'feedback') {
        //alert(remoteMessage.data.rets);
        this.props.navigation.navigate('Feedback', {
          job_id: remoteMessage.data.job_id,
        });
      }

      // }
      // Alert.alert('New job', JSON.stringify(remoteMessage.data));
      console.log('Message handled in the background!', remoteMessage);
    });
  };

  jobsPage = () => {
    this.props.navigation.navigate('jobs', {
      total: this.state.total,
      pending: this.state.pending,
      completed: this.state.completed,
    });
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <IconEnt
            name="menu"
            style={styles.IconEntStyle}
            size={35}
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>

        <Image
          style={styles.avatar}
          source={require('../assets/manager.png')}
        />

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.name}</Text>

            <TouchableOpacity onPress={this.jobsPage}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Complains Detail:
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>
                Total Complains: {'\t'}
                {this.state.total}
              </Text>
              <Text style={{fontSize: 20}}>
                Pending: {'\t'}
                {this.state.pending}
              </Text>

              <Text style={{fontSize: 20}}>
                Completed:{'\t'}
                {this.state.completed}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this._logOut}
              style={styles.buttonContainer}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  _logOut = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.removeItem('fcm');
    this.props.navigation.navigate('stack');
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#02584d',
    height: 140,
    justifyContent: 'center',
  },
  IconEntStyle: {
    marginBottom: '25%',
    marginLeft: '3%',
    color: '#fff',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: '22%',
  },
  bodyContent: {
    //flex: 1,
    alignItems: 'center',
    padding: '8%',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: '3%',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: '4%',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '75%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8%',
    width: 250,
    borderRadius: 30,
    backgroundColor: '#439889',
  },
});

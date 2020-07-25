import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

class loadingScreenmiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const {navigation} = this.props;
    const job_id = navigation.getParam('job_id');
    const lat_cli = navigation.getParam('lat_cli');
    const lng_cli = navigation.getParam('lng_cli');
    this.getEmpToken(job_id, lat_cli, lng_cli);
  };
  getEmpToken = (job_id, lat_cli, lng_cli) => {
    console.log(job_id);
    fetch('http://rets.codlers.com/api/client/getEmpCoords.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jid: job_id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        let token = responseJson['token'];
        this.setState({token: token});
        //  this.getEmpCords(token);
        console.log('res ' + this.state.token);
        this.props.navigation.navigate('Map', {
          token: token,
          lng_cli: lng_cli,
          lat_cli: lat_cli,
        });
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#02584d" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default loadingScreenmiddle;

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';

class ComplainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goBack = () => {
    this.props.navigation.navigate('RegisteredComplains');
  };

  render() {
    const {navigation} = this.props;
    const  EName= navigation.getParam('EName');
    const CAddress = navigation.getParam('CAddress');
    const Description = navigation.getParam('Description');
    const ENumber= navigation.getParam('ENumber');
    const Date = navigation.getParam('Date');
    const status = navigation.getParam('status')
    

    return (
      <View>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => this.goBack()}>
              <IconEnt
                name="chevron-small-left"
                style={styles.IconEntStyle}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Pending Complain Detail</Text>
          </View>
        </View>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Employe on Your Complain: </Text><Text style={{ paddingLeft:7 }}>{EName}</Text>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Employee Number:</Text><Text style={{ paddingLeft:7 }}> {ENumber}</Text>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Your Complain Location: </Text><Text style={{ paddingLeft:7 }}>{CAddress}</Text>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Description: </Text><Text style={{ paddingLeft:7 }}>{Description}</Text>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Complain Registration Date:</Text><Text style={{ paddingLeft:7 }}> {Date}</Text>
        <Text  style={{fontWeight: "bold" , padding:7 }}>Complain status: </Text><Text style={{fontWeight: "bold",fontSize: 24, textAlign:"center" ,padding:7,color:"white", backgroundColor: "red"}}>{status}</Text>


        <View style={styles.buttonWrapper}>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#02584d',
   // height: 70,
    flexDirection: 'row',
    marginBottom:'2%',
    paddingBottom:'3%',
    

  },
  iconWrapper: {
    marginTop: '6%',
    marginLeft: 0,
  },
  IconEntStyle: {
    color: '#fff',
  },
  headerTextWrapper: {
    marginHorizontal: 30,
    marginTop: 23,
    marginLeft:34
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
  },
  // headerText1:{
  //   color: '#fff',
  //   fontSize: 28,
  //   marginLeft:70
  // },
  buttonWrapper: {
    marginTop: '12%',
    marginHorizontal: 100,
  },
  button: {
    width: 200,
    backgroundColor: '#439889',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});

export default ComplainDetail;

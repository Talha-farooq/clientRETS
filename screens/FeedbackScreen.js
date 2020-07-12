import React from 'react';
import { StyleSheet, Modal, View, Text, ToastAndroid,TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";
import IconMat from 'react-native-vector-icons/MaterialIcons';


export default class FeedbackScreen extends React.Component {

  onNegativeButtonPress = (feedback , job_id) => {
    let number = feedback;
    
    console.log(number + job_id);

    fetch('http://rets.codlers.com/api/client/feedback.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback: number,
        jid: job_id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        
         if (responseJson['message'] != undefined) {
          ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
          ToastAndroid.showWithGravity(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          this.props.navigation.navigate('Profile');
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  





  render() {
    const {navigation} = this.props;
    const  job_id= navigation.getParam('job_id');
    console.log('job_id' + job_id);
    return (
      <Modal
        visible={this.props.displayAlert}
        transparent={true}
        animationType={"fade"}>
        <View style={styles.mainOuterComponent}>
          <View style={styles.mainContainer}>
            {/* First ROw - Alert Icon and Title */}
            <View style={styles.topPart}>
              {/*{  
                // this.props.displayAlertIcon
                // &&*/}
                <Image
                  source={require('../assets/img.png')}
                  resizeMode={'contain'}
                  style={styles.alertIconStyle}
                />
              {/*}*/}
              <Text style={styles.alertTitleTextStyle}>
               Give Feedback 
              </Text>
            </View>
            {/* Second Row - Alert Message Text */}
            <View style={styles.middlePart}>
              <Text style={styles.alertMessageTextStyle}>
                Rate Our Employee
              </Text>
            </View>
            {/* Third Row - Positive and Negative Button */}
            <View style={styles.bottomPart}>


            <TouchableOpacity onPress={() => this.onNegativeButtonPress(5, job_id)}>
            <IconMat
            name="sentiment-very-satisfied"
            style={styles.IconEntStyle}
            size={35}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onNegativeButtonPress(4 , job_id)}>
           <IconMat
            name="sentiment-satisfied"
            style={styles.IconEntStyle}
            size={35}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onNegativeButtonPress(3 , job_id)}>
           <IconMat
            name="sentiment-neutral"
            style={styles.IconEntStyle}
            size={35}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onNegativeButtonPress(2, job_id)}>
           <IconMat
            name="sentiment-dissatisfied"
            style={styles.IconEntStyle}
            size={35}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onNegativeButtonPress(1,job_id)}>
          <IconMat
            name="sentiment-very-dissatisfied"
            style={styles.IconEntStyle}
            size={35}
          />
          </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  mainContainer: {
    flexDirection: 'column',
    height: '25%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    borderRadius: 10,
    padding: 4,
  },
  topPart: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 4
  },
  middlePart: {
    flex: 1,
    width: '100%',
    padding: 4,
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 2
  },
  bottomPart: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-evenly',


  },
  IconEntStyle: {
    color: 'black',
  },
  alertIconStyle: {
    height: 35,
    width: 35,
  },
  alertTitleTextStyle: {
    flex: 1,
    textAlign: 'justify',
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    marginHorizontal: 2
  },
  alertMessageTextStyle: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  alertMessageButtonStyle: {
    width: '30%',
    paddingHorizontal: 6,
    marginVertical: 4,
    borderRadius: 10,
    backgroundColor: '#80BFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertMessageButtonTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

});
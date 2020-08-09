import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';
export default class jobs extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
  }
  goBack = () => {
    this.props.navigation.navigate('Profile');
  };
  toPending = () => {
    this.props.navigation.navigate('pending');
  };
  tolisting = () => {
    this.props.navigation.navigate(' ');
  };
  toCompleted = () => {
    this.props.navigation.navigate('completed');
  };
  render() {
    const {navigation} = this.props;
    const total = navigation.getParam('total');
    const pending = navigation.getParam('pending');
    const completed = navigation.getParam('completed');
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={() => this.goBack()}>
              <IconEnt
                name="chevron-small-left"
                style={styles.IconEntStyle}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Jobs</Text>
          </View>
        </View>
        <View style={{justifyContent:"space-around"}}>
          <View
            style={{
              //flex: 1,
              justifyContent: 'center',
              alignItems: 'stretch',
              //  backgroundColor: '#000',
              width: '100%',
            }}>
            <Text style={{alignSelf: 'center', fontSize: 30}}>
              Total Complains: {total}
            </Text>
            <TouchableOpacity
              onPress={this.tolisting}
              style={{
                backgroundColor: '#439889',
                height: '18%',
                justifyContent: 'center',
                marginTop: 2,
                height:50
              }}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 25,
                  
                }}>
                See Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              //flex: 1,
              justifyContent: 'center',
              alignItems: 'stretch',
              //  backgroundColor: '#000',
              width: '100%',
            }}>
            <Text style={{alignSelf: 'center', fontSize: 30}}>
              Pending: {pending}
            </Text>
            <TouchableOpacity
              onPress={this.toPending}
              style={{
                backgroundColor: '#439889',
                height: '18%',
                justifyContent: 'center',
                marginTop: '5%',
                height:50
              }}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 25,
                  
                }}>
                See Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              //flex: 1,
              justifyContent: 'center',
              alignItems: 'stretch',
              //  backgroundColor: '#000',
              width: '100%',
            }}>
            <Text style={{alignSelf: 'center', fontSize: 30}}>
              Completed: {completed}
            </Text>
            <TouchableOpacity
              onPress={this.toCompleted}
              style={{
                backgroundColor: '#439889',
                height: '18%',
                justifyContent: 'center',
                marginTop: 2,
                height:50
              }}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: 25,
                }}>
                See Detail
              </Text>
            </TouchableOpacity>
          </View>
          </View>
         
        </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#02584d',
    // height: 95,
    flexDirection: 'row',
    marginBottom: '3%',
    paddingBottom: '3%',
    width: '100%',
  },
  iconWrapper: {
    marginTop: '4%',
    marginLeft: '1%',
  },
  IconEntStyle: {
    color: '#fff',
  },
  headerTextWrapper: {
    marginHorizontal: '35%',
    marginTop: '4%',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
  },
  buttonWrapper: {
    marginTop: 10,
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

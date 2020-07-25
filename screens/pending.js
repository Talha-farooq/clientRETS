import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {List, ListItem, Row} from 'native-base';
import IconEnt from 'react-native-vector-icons/Entypo';
export default class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: '',
      dataSource: [],
      isLoading: false,
      message: 'no Complains'
    };
  }
  goBack = () => {
    this.props.navigation.navigate('Profile');
  };
  async componentDidMount() {
    try {
      const cid = await AsyncStorage.getItem('cid');
      this.setState({cid: cid});
      this.getComplains();
    } catch (e) {
      console.error(error);
    }
  }
  getComplains = () => {
    fetch('http://rets.codlers.com/api/client/jobview.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cid: this.state.cid,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson,
        });
        //console.log(this.state.dataSource);
      })
      .finally(() => this.setState({isLoading: false}))
      .catch(error => {
        console.error(error);
      });
  };
  renderItem = item => (
    <List>
      <ListItem selected>
        <TouchableOpacity onPress={() => this.getComplainDetail(item)}>
        <View style={styles.Textstyle1}>
          <Text style={{fontWeight: "bold" , padding:7 }}>Employee Name: </Text><Text style={{ paddingLeft:7 }}>{item.empname}</Text>
          {/* <Text style={{fontWeight: "bold" , padding:7 }}>Complain Description: </Text><Text style={{ paddingLeft:7 }}>{item.description}</Text> */}
          <Text style={{fontWeight: "bold" , padding:7 }}> Employee Number: </Text><Text style={{ paddingLeft:10 }}>{item.emp_number}</Text>
          <Text style={{fontWeight: "bold" , padding:7 }}> Complain Date: </Text><Text style={{ paddingLeft:7 }}>{item.dated}</Text>
          <Text style={{fontWeight: "bold" , padding:7 }}> Complain Status: </Text><Text style={{fontWeight: "bold",fontSize: 24, textAlign:"center" ,padding:7,color:"white", backgroundColor: "red" }}>{item.status}</Text>


          </View>
        </TouchableOpacity>
      </ListItem>
    </List> 
  );
  getComplainDetail = item => {
    this.props.navigation.navigate('Complain', {
      EName: item.empname,
      CAddress: item.address,
      Description: item.description,
      ENumber: item.emp_number,
      Date: item.dated,
      status: item.status
    });
  };


  handleRefresh = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => this.getComplains(),
    );
  };


  render() {
    return (
      <View >
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
          <TouchableOpacity
              onPress={() => this.goBack()}>
              <IconEnt name="chevron-small-left" style={styles.IconEntStyle} size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Your Pending Complains</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff'}}>
            {this.state.dataSource == 0 ? (
              <View
                style={{backgroundColor: '#fff'}}
                opacity={0.4}
                style={styles.message}>
                <Text style={{fontSize: 20}}>{this.state.message}</Text>
              </View>
            ) : (
        <FlatList
       style={{  }}
          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.jid}
          renderItem={({item}) => this.renderItem(item)}

          onRefresh={() => this.handleRefresh()}
          refreshing={this.state.isLoading}
        />
      )}
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
  },
  iconWrapper: {
    marginTop: 25,
    marginLeft: 7,
  },
  IconEntStyle: {
    color: '#fff',
  },
  headerTextWrapper: {
    marginHorizontal: 30,
    marginTop: 25,
    marginLeft:34
  },
  headerText: {
    color: '#fff',
    fontSize: 23, 
  },

  Textstyle1:{
    
    // padding:20
  },
});
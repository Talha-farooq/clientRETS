import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {List, ListItem} from 'native-base';
import IconEnt from 'react-native-vector-icons/Entypo';
export default class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: '',
      dataSource: [],
      isLoading: false,
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
    fetch('http://rets.codlers.com/api/client/jobviewcom.php', {
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
        <TouchableOpacity onPress={() => this.getCompletedComplainDetail(item)}>
          <Text style={{fontWeight: "bold" , padding:7 }}>Employee Name:</Text><Text style={{ paddingLeft:7 }}> {item.empname}</Text>
          <Text style={{fontWeight: "bold" , padding:7 }}> Employee Number: </Text><Text style={{ paddingLeft:10 }}>{item.emp_number}</Text>
          <Text style={{fontWeight: "bold" , padding:7 }}>Completed Date: </Text><Text style={{ paddingLeft:7 }}>{item.dated}</Text>
          <Text style={{fontWeight: "bold" , padding:7 }}>Complain Status:</Text><Text style={{ fontWeight: "bold",fontSize: 24, textAlign:"center" ,padding:7,color:"white",  backgroundColor: "mediumseagreen"}}> {item.status}</Text>
          {/* <Text style={{fontWeight: "bold" , padding:7 }}>Client address: </Text><Text style={{ paddingLeft:7 }}>{item.address}</Text> */}
         {/* <Text style={{fontWeight: "bold" , padding:7 }}>Complain Description:</Text><Text style={{ paddingLeft:7 }}> {item.description}</Text> */}



        </TouchableOpacity>
      </ListItem>
    </List> 
  );
  getCompletedComplainDetail = item => {
    this.props.navigation.navigate('CompletedComplainDetail', {
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
          <Text style={styles.headerText}>Completed Jobs</Text>
          </View>
        </View>
        
        <FlatList
       style={{  }}
          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.jid}
          renderItem={({item}) => this.renderItem(item)}

          onRefresh={() => this.handleRefresh()}
          refreshing={this.state.isLoading}
        />
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
    marginTop: 24,
    marginLeft: 7,
  },
  IconEntStyle: {
    color: '#fff',
  },
  headerTextWrapper: {
    marginHorizontal: 70,
    marginTop: 20,
    marginLeft:50
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
  },
});
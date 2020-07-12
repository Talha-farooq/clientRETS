import React, { Component } from 'react';
import { View,Image, ImageBackground,StyleSheet, Text } from 'react-native';




class LogoScreen extends React.Component {
  constructor(props) {
    super(props);
  
    setTimeout(()=>
{
    this.props.navigation.navigate("Loading");
}, 2000);
  }



  render() {
    return (
    
        <ImageBackground   style={styles.logo} >
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/img.png')} 
                 style={{height:300 , width:200}}>
            </Image>
            <Text style={styles.text}> RETS</Text>

            </View>
           
          </ImageBackground>
   
    );
  }
}

export default LogoScreen;
const styles = StyleSheet.create({
    logo: { 
        width: '100%',
        height: '100%',
       
        backgroundColor:'#21544D',
    },
    text: {color: 'white',
    fontSize: 30, 

    }


});
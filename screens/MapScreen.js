import React, {Component} from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';

// import MapView, {Marker} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

import MapView, {AnimatedRegion, Marker, Animated} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
const LATITUDE = 33.74083037;
const LONGITUDE = 72.78583019;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;


class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // cordinates
     coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    region:{
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
     };
  }

  async componentDidMount() {
    this.fetchCoords();
  }



  fetchCoords = () => {
    this.watchId = Geolocation.watchPosition(
      position => {
        let lng = position.coords.longitude;
        let lat = position.coords.latitude;
        //console.log('longitude: ' + lng + ' ' + 'Latitude: ' + lat);
        this.setState({
          coordinate: {
            latitude: lat,
            longitude: lng,
          },
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 500,
        fastestInterval: 500,
        forceRequestLocation: true,
        distanceFilter: 0,
      },
    );
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    const duration = 500;

    if (this.props.coordinate !== nextProps.coordinate) {
      if (Platform.OS === 'android') {
        if (this.marker) {
          this.marker._component.animateMarkerToCoordinate(
            nextProps.coordinate,
            duration,
          );
        }
      } else {
        this.state.coordinate
          .timing({
            ...nextProps.coordinate,
            duration,
          })
          .start();
      }
    }
  }
  render() {

    const {navigation} = this.props;
    const  job_id= navigation.getParam('job_id');
    const  lat_cli= navigation.getParam('lat_cli');
    const  lng_cli= navigation.getParam('lng_cli');
    const  lat_emp= navigation.getParam('lat_emp');
    const  lng_emp= navigation.getParam('lng_emp');
    
    const origin = {latitude: lat_emp, longitude: lng_emp};
    const destination = {latitude: lat_cli, longitude: lng_cli};

    return (
      <View accessible={true} style={styles.container}>
       
                <Animated
                  style={styles.map}
                  initialRegion={this.state.region}
                  onRegionChange={() => this.onRegionChange}>
                  <MapView.Marker.Animated
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={this.state.coordinate}
                  />
                </Animated>
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fadeIn: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default MapScreen;
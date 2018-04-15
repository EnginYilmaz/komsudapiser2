import React, { Component } from 'react'
import { Text, View, StyleSheet, Switch, Alert, AppRegistry} from 'react-native'
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default class Fetchdata extends Component {
  constructor (props) {
    super(props);
  };

  state = {
    latitude: 40.3565,
    longitude: 27.9774,
    markers:[]
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
      });
    },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
   }
   onRegionChange (region) {

       fetch('https://isg.info.tr/query_maps.php' + '?latitude=' + this.state.latitude + '&longitude=' + this.state.longitude , {method: 'GET'})
        .then((response) => response.json())
        .then((responseJson) => {
          let markers = [...this.state.markers];
          markers.latlng = responseJson;
          this.setState({ markers });
          console.log(responseJson);
        })

   };
   render() {
      return (
        <View style={styles.container}>
          <MapView
                style={styles.map}
                initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
            }}
            onRegionChange={this.onRegionChange.bind(this)}
            >
              {this.state.markers.map(marker => (
                <Marker
                  coordinate={marker.latlng}
                  title={"marker.title"}
                  description={"marker.description"}
                />
              ))}
          </MapView>
      </View>
      );
   }
}

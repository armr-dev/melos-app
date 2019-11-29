import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { geolocated } from "react-geolocated";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class MyMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: null,
//       lng: null
//     },
    
//     zoom: 11
//   };

//   render() {
    
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyCQgTwARDtFrtxT29EcwXt7_4PMQ7ypizM' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default MyMap;

class Demo extends React.Component {
  render() {
      return !this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
      ) : !this.props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
      ) : this.props.coords ? (
          <table> 
              <tbody>
                  <tr>
                      <td>latitude</td>
                      <td>{this.props.coords.latitude}</td>
                  </tr>
                  <tr>
                      <td>longitude</td>
                      <td>{this.props.coords.longitude}</td>
                  </tr>
                  <tr>
                      <td>altitude</td>
                      <td>{this.props.coords.altitude}</td>
                  </tr>
                  <tr>
                      <td>heading</td>
                      <td>{this.props.coords.heading}</td>
                  </tr>
                  <tr>
                      <td>speed</td>
                      <td>{this.props.coords.speed}</td>
                  </tr>
              </tbody>
          </table>
      ) : (
          <div>Getting the location data&hellip; </div>
      );
  
  }
}

export default geolocated({
  coordenadas:{
    
  },
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);
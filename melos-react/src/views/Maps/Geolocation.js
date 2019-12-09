import React, { Component } from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Geolocated extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      
        console.log(this.state.lat);
        console.log(this.state.lng);
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
    
  }
  
  static defaultProps = {
    center: {
      lat: -3.0911771999999997,
      lng: -60.069170299999996
    },
    zoom: 16
  };
  
  render() {
    
    var x = this.state.lat;
    var y = this.state.lng;
    console.log(this.state);
    console.log("latitude", x);
    console.log("longitude", y);

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCQgTwARDtFrtxT29EcwXt7_4PMQ7ypizM'}}
          defaultCenter={this.state}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={x}
            lng={y}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
  
}
export default Geolocated;

// const CustomSkinMap = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: x, lng: y }}
//       defaultOptions={{
//         scrollwheel: true,
//         zoomControl: false,
//         styles: [
//           {
//             featureType: "water",
//             stylers: [
//               { saturation: 43 },
//               { lightness: -11 },
//               { hue: "#0088ff" }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.fill",
//             stylers: [
//               { hue: "#ff0000" },
//               { saturation: -100 },
//               { lightness: 99 }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#808080" }, { lightness: 54 }]
//           },
//           {
//             featureType: "landscape.man_made",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ece2d9" }]
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ccdca1" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#767676" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.stroke",
//             stylers: [{ color: "#ffffff" }]
//           },
//           { featureType: "poi", stylers: [{ visibility: "off" }] },
//           {
//             featureType: "landscape.natural",
//             elementType: "geometry.fill",
//             stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
//           },
//           { featureType: "poi.park", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.sports_complex",
//             stylers: [{ visibility: "on" }]
//           },
//           { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.business",
//             stylers: [{ visibility: "simplified" }]
//           }
//         ]
//       }}
//     >
//       <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//     </GoogleMap>
//   ))
// );

// export default function Maps() {
//   return (
//     <div>
//     <CustomSkinMap
//       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQgTwARDtFrtxT29EcwXt7_4PMQ7ypizM
//       "
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `100vh` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }

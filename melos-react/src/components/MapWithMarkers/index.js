import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker } from "react-google-maps";

import showMarker from '../../assets/img/markers/showMarker.svg'
import attractionMarker from '../../assets/img/markers/attractionMarker.svg'
import eventMarker from '../../assets/img/markers/eventMarker.svg'
import theaterMarker from '../../assets/img/markers/theaterMarker.svg'
import musicMarker from '../../assets/img/markers/musicMarker.svg'

const Markers = ({ places }) => {
  return places.map(place => {
    return (
      <Marker key={ place.id } position = {{ lat: place.lat, lng: place.lng }} icon={place.type == 'show' ? showMarker : 
                                                                                    (place.type == 'attraction' ? attractionMarker : 
                                                                                    (place.type == 'event' ? eventMarker :
                                                                                    (place.type == 'theater' ? theaterMarker : musicMarker)))} />
    )
  })
}

const Map = ({ places }) => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: -3.091331, lng: -60.018181 }}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: false,
        zoomControlOptions: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: 22 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: 100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 66 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "off" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "off" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      <Markers places={ places }/>
    </GoogleMap>
  )
}

class MapWithMarkers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        places={this.props.places}
      />
    )
  }
}

  export default withScriptjs(withGoogleMap(MapWithMarkers));
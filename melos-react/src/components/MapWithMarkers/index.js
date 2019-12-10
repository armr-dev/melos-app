import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import showMarker from "../../assets/img/markers/showMarker.svg";
import attractionMarker from "../../assets/img/markers/attractionMarker.svg";
import eventMarker from "../../assets/img/markers/eventMarker.svg";
import theaterMarker from "../../assets/img/markers/theaterMarker.svg";
import musicMarker from "../../assets/img/markers/musicMarker.svg";

class Markers extends React.Component {
  state = { places: [] };

  constructor(props) {
    super(props);

    this.state.places = this.props.places;
  }

  selectEventMarker = place => {
    this.props.setState({ selectedEvent: place, changed: true });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      places: nextProps.places
    };
  }

  render() {
    const { places } = this.state;
    return places.map(place => {
      return (
        <Marker
          key={place.id}
          position={{ lat: place.lat, lng: place.lng }}
          icon={
            place.type == "show"
              ? showMarker
              : place.type == "attraction"
              ? attractionMarker
              : place.type == "event"
              ? eventMarker
              : place.type == "theater"
              ? theaterMarker
              : musicMarker
          }
          onClick={this.selectEventMarker.bind(this, place)}
        />
      );
    });
  }
}

class Map extends React.Component {
  state = {
    places: [],
    selectedEvent: [{}],
    changed: false
  };

  constructor(props) {
    super(props);
    this.state.places = this.props.places;
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      places: nextProps.places
    };
  }

  sendState = () => {
    this.props.setState({
      selectedEvent: this.state.selectedEvent,
      changed: true
    });
  };

  render() {
    const { places, changed } = this.state;

    if (changed) {
      this.sendState();
      this.setState({ changed: false });
    }

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
        <Markers places={places} setState={p => this.setState(p)} />
      </GoogleMap>
    );
  }
}

class MapWithMarkers extends React.Component {
  state = {
    selectedEvent: [{}],
    changed: false
  };

  constructor(props) {
    super(props);
  }

  sendState = () => {
    this.props.setState({
      selectedEvent: this.state.selectedEvent,
      eventVisible: true
    });
  };

  render() {
    if (this.state.changed) {
      this.sendState();
      this.setState({ changed: false });
    }

    return <Map places={this.props.places} setState={p => this.setState(p)} />;
  }
}

export default withScriptjs(withGoogleMap(MapWithMarkers));

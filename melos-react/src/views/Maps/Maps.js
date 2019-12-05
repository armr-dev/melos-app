import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import mapStyle from 'assets/jss/material-dashboard-react/mapStyles.js'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'

import showIcon from '../../assets/img/showIcon.svg'
import attractionIcon from '../../assets/img/attractionIcon.svg'
import eventIcon from '../../assets/img/eventIcon.svg'
import theaterIcon from '../../assets/img/theaterIcon.svg'
import musicIcon from '../../assets/img/musicIcon.svg'

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
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
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: -3.091331, lng: -60.018181 }} />
    </GoogleMap>
  ))
);

function Clickou(e) {
    e.preventDefault();
    console.log('bacon');
}



export default function Maps() {
  return (
    <div style={{position: 'relative', height: '100vh', width: '100vw'}}>

      <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQgTwARDtFrtxT29EcwXt7_4PMQ7ypizM
        "
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: '100vw'}} />}
        mapElement={<div style={{ height: `100%` }}/>}
        />
      <div style={mapStyle.bottomMenu}>
        <div style={mapStyle.dragButton} onClick={Clickou}/>
        <div style={{marginBottom:10}}>
          <input type='text' placeholder='Pesquisar eventos' style={mapStyle.searchInput}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Fab style={mapStyle.showButton}>
              <img src={showIcon} style={{width:'43%'}}/>
            </Fab>
            <p style={{fontSize:'.95em', marginTop: 7}}>Show</p>
          </div>
          
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
            <Fab style={mapStyle.attractionButton}>
              <img src={attractionIcon} style={{width:'43%'}}/>
            </Fab>
            <p style={{fontSize:'.95em', marginTop: 7, color:'#828282'}}>Atração</p>
          </div>
          
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
            <Fab style={mapStyle.eventButton}>
              <img src={eventIcon} style={{width:'43%'}}/>
            </Fab>
            <p style={{fontSize:'.95em', marginTop: 7, color:'#828282', fontWeight:'bold'}}>Evento</p>
          </div>
          
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
            <Fab style={mapStyle.theaterButton}>
              <img src={theaterIcon} style={{width:'43%'}}/>
            </Fab>
            <p style={{fontSize:'.95em', marginTop: 7, fontWeight:'bold'}}>Teatro</p>
          </div>
          
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
            <Fab style={mapStyle.musicButton}>
              <img src={musicIcon} style={{width:'43%'}}/>
            </Fab> 
            <p style={{fontSize:'.95em', marginTop: 7}}>Música</p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

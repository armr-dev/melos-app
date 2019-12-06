import React, { Component } from 'react';
import mapStyle from 'assets/jss/material-dashboard-react/mapStyles.js'
import Fab from '@material-ui/core/Fab'
import Drawer from '@material-ui/core/Drawer';
import Map from '../../components/Map'
import showIcon from '../../assets/img/showIcon.svg'
import attractionIcon from '../../assets/img/attractionIcon.svg'
import eventIcon from '../../assets/img/eventIcon.svg'
import theaterIcon from '../../assets/img/theaterIcon.svg'
import musicIcon from '../../assets/img/musicIcon.svg'
import topMenuIcon from '../../assets/img/topMenuIcon.svg'
// import { Container } from './styles';

export default class Maps extends Component {
    state = {
        opened: false,
        searchTerm: ''
    }

    toggleMenu = () => {
    const { opened } = this.state;
     this.setState({opened: !opened})
     console.log(this.state);
    }

    openMenu = () => {
        this.setState({opened: true})
    }

    handleSearch = e => {
        const searchTerm = e.target.value;
        this.setState({searchTerm})
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
        if (searchTerm.length > 0) {
            this.loadSearch();
        }
        }, 500);
    }

    loadSearch = async () => {
        const { searchTerm } = this.state;
        console.log(`Sua busca para o resultado ${searchTerm} retornou 10 termos`)
    }

     
  render() {
      const {opened, searchTerm} = this.state;
    return (
            <div style={{position: 'relative', height: '100vh', width: '100vw'}}>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQgTwARDtFrtxT29EcwXt7_4PMQ7ypizM"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: '100vw'}} />}
                mapElement={<div style={{ height: `100%` }}/>}
                />
              <div style={{position: 'absolute', top: '2.43vh', left: '4.87vw'}}>
                <img src={topMenuIcon}
                     style={{width: '6.81vw', height: '3.4vh'}}/>
              </div>
        
              <div 
                style={opened ? mapStyle.bottomMenuOpened :  mapStyle.bottomMenu}
              >
                <div style={mapStyle.dragButton} onClick={this.toggleMenu}/>
                <div style={{marginBottom:10}}>
                  <input 
                    type='text' 
                    placeholder='Pesquisar eventos' 
                    value={searchTerm}
                    onChange={this.handleSearch} 
                    style={mapStyle.searchInput}
                    onClick={this.openMenu}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position:'absolute', bottom:0}}>
                  
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
                    <p style={{fontSize:'.95em', marginTop: 7}}>Atração</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.eventButton}>
                      <img src={eventIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Evento</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.theaterButton}>
                      <img src={theaterIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Teatro</p>
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
}

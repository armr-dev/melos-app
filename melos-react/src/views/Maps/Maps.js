import React, { Component } from 'react';
import mapStyle from 'assets/jss/material-dashboard-react/mapStyles.js'
import Fab from '@material-ui/core/Fab'

import Map from '../../components/Map'

import teatro from '../../assets/img/teatro.jpg'
import showIcon from '../../assets/img/showIcon.svg'
import attractionIcon from '../../assets/img/attractionIcon.svg'
import eventIcon from '../../assets/img/eventIcon.svg'
import theaterIcon from '../../assets/img/theaterIcon.svg'
import musicIcon from '../../assets/img/musicIcon.svg'
import topMenuIcon from '../../assets/img/topMenuIcon.svg'

function selectColor(type) {
  switch (type) {
    case 'show':
      return mapStyle.tagStyleShow;
    case 'attraction':
      return mapStyle.tagStyleAttraction;
    case 'event':
      return mapStyle.tagStyleEvent;
    case 'theater':
      return mapStyle.tagStyleTheater;

    default:
      return mapStyle.tagStyleMusic;
  }
}

const initialList = [{
    id: 'a',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.',
    type: 'show',
    tags: ['#orquestra', '#piano'],
  },
  {
    id: 'b',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet.',
    type: 'attraction',
    tags: ['#evento', '#atração', '#violão'],
  },
  {
    id: 'c',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.',
    type: 'event',
    tags: ['#orquestra', '#show'],
  },
  {
    id: 'd',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.',
    type: 'theater',
    tags: ['#atração', '#show'],
  },
  {
    id: 'e',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.',
    type: 'music',
    tags: ['#show', '#bacon'],
  },
  {
    id: 'f',
    img: teatro,
    title: 'Evento',
    description: 'Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.',
    type: 'music',
    tags: ['#farofão', '#farinha'],
  }]

export default class Maps extends Component {
    state = {
        opened: true,
        showEvents: true,
        emptyList: false,
        searchTerm: '',
        eventList: [],
    }

    deleteList = () => {
      this.setState({ eventList:  []})
    }

    resetEvents = () => {
      this.setState({ eventList: initialList, emptyList: false })
    }

    filterEvents = type => {
      const { eventList, emptyList } = this.state;

      var auxList = eventList
      console.log(auxList);
      
      if (emptyList) {
        auxList = initialList
        this.setState({emptyList: false});
      }

      var filteredEvents = auxList.filter(function(item) {
        if (item.type == type) {
          return item;
        }
      })

      this.setState({eventList: filteredEvents, emptyList: true})
    }

    toggleMenu = () => {
      const { opened, showEvents } = this.state;
      this.setState({showEvents: !showEvents});
      this.setState({opened: !opened})
      console.log(this.state);
    }

    openMenu = () => {
      this.setState({showEvents: true});
      this.setState({opened: true})
    }

    showEvents = () => {
      const { showEvents } = this.state;
      this.setState({showEvents: !showEvents});
      console.log(this.state);
    }

    handleSearch = e => {
      const searchTerm = e.target.value;
      this.setState({ searchTerm })
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (searchTerm.length > 0) {
          this.loadSearch();
        }
        else {
          this.resetEvents();
        }
      }, 200);
    }

    loadSearch = async () => {
      const { searchTerm, eventList } = this.state;

      var results = eventList.filter((item) => {
        if (item.tags.some(e => {return e.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1})) {
          return item;
        }
      })

      this.setState({eventList:results})
      console.log(`Sua busca para o resultado ${searchTerm} retornou 10 termos`)
    }

  componentDidMount() {
    this.setState({eventList: initialList})
  };
  
  render() {
    const { opened, searchTerm, showEvents, eventList } = this.state;

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
                <div 
                  style={mapStyle.dragButton} 
                  onClick={this.toggleMenu}
                />
                <div style={{marginBottom:10}}>
                  <input 
                    type='text' 
                    placeholder='Pesquisar eventos' 
                    value={searchTerm}
                    onChange={this.handleSearch} 
                    style={mapStyle.searchInput}
                    onClick={this.openMenu}/>
                </div>
                <div 
                  style={showEvents ? mapStyle.eventListOpened : mapStyle.eventList}
                >  
                  {eventList.map(item => (
                    <div style={mapStyle.eventCard} key={item.id}>
                      <div style={{overflow:'hidden', width:'29vw', height:'100%'}}>
                        <img 
                          src={item.img}
                          style={mapStyle.imgStyle}
                        />
                      </div>
                      <div style={mapStyle.cardContentStyle}>
                        <div>
                          <div style={mapStyle.titleStyle}>{item.title}</div>
                          <div style={mapStyle.tagContainer}>
                          {(item.tags).map(tag => (
                            <div style={selectColor(item.type)}>{tag}</div>
                            ))}
                          </div> 
                        </div>
                        <div style={mapStyle.descriptionStyle}>{item.description}</div>
                      </div>
                    </div>
                    ))}
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Fab style={mapStyle.showButton} onClick={this.filterEvents.bind(this, 'show')}>
                      <img src={showIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Show</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.attractionButton} onClick={this.filterEvents.bind(this, 'attraction')}>
                      <img src={attractionIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Atração</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.eventButton} onClick={this.filterEvents.bind(this, 'event')}>
                      <img src={eventIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Evento</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.theaterButton} onClick={this.filterEvents.bind(this, 'theater')}>
                      <img src={theaterIcon} style={{width:'43%'}}/>
                    </Fab>
                    <p style={{fontSize:'.95em', marginTop: 7}}>Teatro</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5.11vw'}}>
                    <Fab style={mapStyle.musicButton} onClick={this.filterEvents.bind(this, 'music')}>
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

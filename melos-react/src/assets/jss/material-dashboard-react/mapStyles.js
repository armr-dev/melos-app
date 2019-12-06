const mapStyle = {
    bottomMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-around',
        position: 'absolute',
        height:'25vh',
        width:'100vw',
        backgroundColor:'#F2F2F2',
        bottom: 0,
        left: 0,
        borderRadius: '15px 15px 0px 0px',
        boxShadow:'0px 0px 6px 0px grey',
        transition: 'all ease-in-out 0.5s',
    },

    bottomMenuOpened: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
        height:'92vh',
        width:'100vw',
        backgroundColor:'#F2F2F2',
        bottom: 0,
        left: 0,
        borderRadius: '15px 15px 0px 0px',
        boxShadow:'0px 0px 6px 0px grey',
        transition: 'all ease-in-out 0.5s'
    },

    dragButton: {
        height: '8px',
        width: '7.5vw',
        backgroundColor: '#C4C4C4',
        marginTop: '1vh',
        marginBottom: '1vh',
        borderRadius: 3,
        cursor: 'pointer',
    },

    showButton: {
        backgroundColor: '#F2C94C',
        height: '12.67vw',
        width: '12.67vw',
    },

    attractionButton: {
        backgroundColor: '#9B51E0',
        height: '12.67vw',
        width: '12.67vw',
    },

    eventButton: {
        backgroundColor: '#EB5757',
        height: '12.67vw',
        width: '12.67vw',
    },

    theaterButton: {
        backgroundColor: '#2F80ED',
        height: '12.67vw',
        width: '12.67vw',
    },

    musicButton: {
        backgroundColor: '#27AE60',
        height: '12.67vw',
        width: '12.67vw',
    },

    searchInput: {
        borderRadius: '5.5vh',
        height: '4.5vh',
        width: '92vw', 
        border: '0px', 
        padding: '10px 0px',
        boxShadow:'0px 0px',
        textAlign: 'center',
        fontSize: '1.1em'
    }

}

export default mapStyle;
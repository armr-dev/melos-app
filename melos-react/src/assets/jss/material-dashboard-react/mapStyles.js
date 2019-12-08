const mapStyle = {
    bottomMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        height:'92vh',
        width:'100vw',
        backgroundColor:'#F2F2F2',
        bottom: 0,
        left: 0,
        borderRadius: '15px 15px 0px 0px',
        boxShadow:'0px 0px 6px 0px grey',
        transition: 'all ease-in-out 0.5s'
    },

    eventList: {
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '95vw',
        height: 0,
        transition: 'all ease-in-out 0.5s',
    },

    eventListOpened: {
        overflow: 'auto',
        padding: '0 1vw',
        flexDirection: 'column',
        alignItems: 'center',
        width: '95vw',
        height: '100vh',
        marginBottom: 10,
        transition: 'all ease-in-out 0.5s',
    },

    eventCard: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '20vh',
        width: '100%',
        margin: '1vw 0',
        borderRadius: '10px',
        backgroundColor: 'white',
    },

    cardContentStyle: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height:'100%',
    },

    imgStyle: {
        flex:3,
        height: '100%',
        borderRadius: '10px 0px 0px 10px',
    },

    titleStyle: {
        margin:'.5vh 0 0 2vw',
        fontWeight: 'bold',
        color: '#828282'
    },

    descriptionStyle: {
        margin: '0 2vw .5vh 2vw',
        textAlign: 'justify',
        fontSize: '.9em',
        overflow: 'hidden',
    },

    tagContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '2vw',
        marginBottom: '1%',

    },

    tagStyleShow: {
        height: '1.1em',
        borderRadius: '1.2em',
        width: 'auto',
        backgroundColor: '#F2C94C',
        marginRight: '1vw',
        padding: '0 5px 0 5px',
        lineHeight: 1,       
        verticalAlign: 'center',
        textAlign:'center',
        color:'white',
        fontWeight: '500',
    },
    tagStyleAttraction: {
        height: '1.1em',
        borderRadius: '1.2em',
        width: 'auto',
        backgroundColor: '#9B51E0',
        marginRight: '1vw',
        padding: '0 5px 0 5px',
        lineHeight: 1,       
        verticalAlign: 'center',
        textAlign:'center',
        color:'white',
        fontWeight: '500',
    },
    tagStyleEvent: {
        height: '1.1em',
        borderRadius: '1.2em',
        width: 'auto',
        backgroundColor: '#EB5757',
        marginRight: '1vw',
        padding: '0 5px 0 5px',
        lineHeight: 1,       
        verticalAlign: 'center',
        textAlign:'center',
        color:'white',
        fontWeight: '500',
    },
    tagStyleTheater: {
        height: '1.1em',
        borderRadius: '1.2em',
        width: 'auto',
        backgroundColor: '#418BEE',
        marginRight: '1vw',
        padding: '0 5px 0 5px',
        lineHeight: 1,       
        verticalAlign: 'center',
        textAlign:'center',
        color:'white',
        fontWeight: '500',
    },
    tagStyleMusic: {
        height: '1.1em',
        borderRadius: '1.2em',
        width: 'auto',
        backgroundColor: '#27AE60',
        marginRight: '1vw',
        padding: '0 5px 0 5px',
        lineHeight: 1,       
        verticalAlign: 'center',
        textAlign:'center',
        color:'white',
        fontWeight: '500',
    },

    dragButton: {
        height: '1vh',
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
    },

    drawerParentOpened: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '70vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        // transition: 'all ease-in-out 0.5s',
        transition: 'width 0.7s'
    },

    drawerParent: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '0vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        transition: 'width 0.5s'

    },

    darkBackground: {
        width:'100vw', 
        height:'100vh', 
        backgroundColor: 'black', 
        opacity:0.5, 
        position:'absolute', 
        top: 0, 
        left: 0,
    },

    drawerStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },

    drawerBtn : {
        display: 'flex',
        width: '100%',
        minWidth: '28vw',
        height: '5%',
        color: 'black',
        visibility: 'visible',
    },

    drawerBtnLogout : {
        display:'flex',
        width: '100%',
        height: '5%',
        color: 'red',
        visibility: 'visible',
    },

    hiddenBtn : {
        visibility: 'hidden',
        transition: 'all ease-in-out 0.17s'
    }

}

export default mapStyle;
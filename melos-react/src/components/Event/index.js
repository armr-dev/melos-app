import React, { Component } from "react";
import Header from "components/Header";
import rightArrow from "assets/img/rightArrow.svg";
import backIcon from "../../assets/img/backIcon.svg";
import { transition } from "assets/jss/material-dashboard-react";

const type = {
  show: {
    name: "Show",
    color: "#F2C94C"
  },
  attraction: {
    name: "Atração",
    color: "#9B51E0"
  },
  event: {
    name: "Evento",
    color: "#EB5757"
  },
  theater: {
    name: "Teatro",
    color: "#2F80ED"
  },
  music: {
    name: "Música ao Vivo",
    color: "#27AE60"
  }
};

const style = {
  pageStyle: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#EEEEEE",
    visibility: "visible",
    transition: "left 0.25s ease-in"
  },
  pageStyleInvisible: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    left: "-100vw",
    top: 0,
    backgroundColor: "#EEEEEE",
    transition: "left 0.35s ease-out, visibility 1.5s, opacity 1.5s",
    visibility: "hidden",
    opacity: 0
  },

  headerBackground: {
    float: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100vw",
    height: "10vh"
  },

  headerText: {
    fontWeight: "400",
    color: "white",
    fontSize: "1.5em",
    marginLeft: "8vw"
  },

  backIconStyle: {
    height: "30%",
    marginLeft: "4vw"
  },

  imgStyle: {
    maxHeight: "40vh",
    width: "100vw"
  },

  imgContainerStyle: {
    width: "100%",
    height: "40vh",
    overflow: "hidden"
  },

  titleStyle: {
    textAlign: "center",
    width: "100vw",
    fontSize: "1.6em",
    fontWeight: "400",
    marginBottom: "1vh"
  },

  tagContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "2vw",
    marginBottom: "2vh",
    width: "100vw"
  },

  tagStyle: {
    height: "1.1em",
    borderRadius: "1.2em",
    width: "auto",
    marginRight: "1vw",
    padding: "3px 7px 1px 7px",
    lineHeight: 1,
    verticalAlign: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "500"
  },

  adressContainer: {
    height: "12vh",
    borderWidth: "2px 0 2px 0",
    borderColor: "#C4C4C4",
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row"
  },

  adressStyle: {
    flex: 4
  },

  goToAdressBtn: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    borderWidth: "0 0 0 2px",
    borderStyle: "solid",
    borderColor: "#C4C4C4"
  },

  adressTitleStyle: {
    fontWeight: "bold",
    margin: "1vh 0 0 4vw"
  },

  adressDescriptionStyle: {
    margin: "0 0 1vh 4vw"
  },

  descriptionStyle: {
    textAlign: "justify",
    margin: "1vh 4vw 0 4vw"
  }
};

class Event extends React.Component {
  state = {
    visible: true,
    event: {}
  };

  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible, event: this.props.event };
  }

  back = () => {
    this.setState({ visible: false });
    this.props.setState({ eventVisible: false });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      visible: nextProps.visible,
      event: nextProps.event
    };
  }

  render() {
    const { visible, event } = this.state;
    var sel;
    switch (event.type) {
      case "show":
        sel = type.show;
        break;
      case "attraction":
        sel = type.attraction;
        break;
      case "event":
        sel = type.event;
        break;
      case "theater":
        sel = type.theater;
        break;
      default:
        sel = type.music;
    }
    return (
      <div style={visible ? style.pageStyle : style.pageStyleInvisible}>
        <div
          style={Object.assign({
            backgroundColor: sel.color,
            ...style.headerBackground
          })}
        >
          <img src={backIcon} style={style.backIconStyle} onClick={this.back} />
          <div style={style.headerText}>{sel.name}</div>
        </div>
        <img src={event.img} style={style.imgStyle} />
        <div style={style.titleStyle}>{event.title}</div>
        <div style={style.tagContainer}>
          {event.tags.map(tag => (
            <div
              style={Object.assign({
                backgroundColor: sel.color,
                ...style.tagStyle
              })}
            >
              {tag}
            </div>
          ))}
        </div>
        <div style={style.adressContainer}>
          <div style={style.adressStyle}>
            <div style={style.adressTitleStyle}>Endereço</div>
            <div style={style.adressDescriptionStyle}>{event.adress}</div>
          </div>
          <button style={style.goToAdressBtn}>
            <img src={rightArrow} />
          </button>
        </div>
        <div style={style.descriptionStyle}>{event.description}</div>
      </div>
    );
  }
}

export default Event;

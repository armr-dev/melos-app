import React from "react";
import Header from "components/Header";
import rightArrow from "assets/img/rightArrow.svg";

const type = {
  show: {
    color: "#F2C94C"
  },
  attraction: {
    color: "#9B51E0"
  },
  event: {
    color: "#EB5757"
  },
  theater: {
    color: "#2F80ED"
  },
  music: {
    color: "#27AE60"
  }
};

const style = {
  pageStyle: {
    position: "absolute",
    left: 0,
    top: 0
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
    padding: "0 5px 0 5px",
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

const Event = ({ event }) => {
  console.log(event);
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
  console.log(event.location);
  return (
    <div style={style.pageStyle}>
      <Header props={event.type} />
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
};

export default Event;

import React from "react";
import backIcon from "../../assets/img/backIcon.svg";

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
  }
};

const Header = ({ props }) => {
  var sel;
  switch (props) {
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
    <div
      style={Object.assign({
        backgroundColor: sel.color,
        ...style.headerBackground
      })}
    >
      <img src={backIcon} style={style.backIconStyle} />
      <div style={style.headerText}>{sel.name}</div>
    </div>
  );
};

export default Header;

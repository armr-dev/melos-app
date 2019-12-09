import React, { Component } from "react";
import Event from "components/Event";
import teatro from "assets/img/teatro.jpg";

const initialList = [
  {
    id: "a",
    img: teatro,
    title: "Evento",
    description:
      "Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "show",
    tags: ["#orquestra", "#piano"],
    lat: -3.091331,
    lng: -60.018181,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  },
  {
    id: "b",
    img: teatro,
    title: "Evento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "attraction",
    tags: ["#evento", "#atração", "#violão"],
    lat: -3.031,
    lng: -60.018181,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  },
  {
    id: "c",
    img: teatro,
    title: "Evento",
    description:
      "Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "event",
    tags: ["#orquestra", "#show"],
    lat: -3.071,
    lng: -60.01181,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  },
  {
    id: "d",
    img: teatro,
    title: "Evento",
    description:
      "Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "theater",
    tags: ["#atração", "#show"],
    lat: -3.11,
    lng: -60.0,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  },
  {
    id: "e",
    img: teatro,
    title: "Evento",
    description:
      "Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "music",
    tags: ["#show", "#bacon"],
    lat: -3.09,
    lng: -60.06,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  },
  {
    id: "f",
    img: teatro,
    title: "Evento",
    description:
      "Descrição do evento: Lorem ipsum dolor sit amet, consectetur adipiscing elit.  In sit amet suscipit dolor. Nunc sed facilisis sapien. Consectetur adipiscing elit. Sent sit amet ornare urna. Duis ne.",
    type: "music",
    tags: ["#farofão", "#farinha"],
    lat: -3.09555,
    lng: -60.03,
    adress:
      "Av. Darcy Vargas, 1.200 - Parque Dez de Novembro, Manaus - AM, 69050-020"
  }
];

const test = () => {
  return <Event event={initialList[2]} visible={true} />;
};

export default test;

/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import Login from "views/Login/Login.js";
import Maps from "views/Maps/Maps.js";
import SignUp from "views/SignUp/SignUp.js";
import Geolocation from "views/Maps/Geolocation.js";
import test from "views/test.js";
import CreateEvent from "views/Event/Event.js";

const dashboardRoutes = [
  {
    path: "/maps",
    name: "Mapa",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/geolocation",
    name: "Geolocalização",
    icon: LocationOn,
    component: Geolocation,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    layout: "/admin"
  },
  {
    path: "/test",
    name: "SignUp",
    component: test,
    layout: "/admin"
  }, 
  {
    path: "/event",
    name: "CreateEvent",
    component: CreateEvent,
    layout: "/admin"
  },
];

export default dashboardRoutes;

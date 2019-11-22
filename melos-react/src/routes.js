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
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import Login from "views/Login/Login.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";
import SignUp from "views/SignUp/SignUp.js";

const dashboardRoutes = [
  {
    path: "/maps",
    name: "Mapa",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: UserProfile,
    component: Login,
    layout: "/admin"
  },
  {
    path: "/signup",
    name: "SignUp",
    icon: UserProfile,
    component: SignUp,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;

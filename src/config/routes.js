import React from "react";
import Home from "../pages/home/Home";
import HomeIcon from "@material-ui/icons/Home";
import Menu from "../pages/menus/Menu";
import Menupte from "../pages/menus/MenuPte";
import Menuadminpte from "../pages/menus/MenuAdminPte";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: <HomeIcon />,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    icon: <MenuBookIcon />,
  },
  // {
  //   path: "/signin",
  //   name: "Login",
  //   component: Signin,
  //   icon: <MenuBookIcon />,
  // },
  {
    path: "/menupte",
    name: "Private Menu",
    component: Menupte,
    icon: <MenuBookIcon />,
    is_private: true,
  },
  {
    path: "/menupte",
    name: "Private Menu",
    component: Menupte,
    icon: <MenuBookIcon />,
    is_private: true,
    user_type: "vendor",
  },
  {
    path: "/menuadminpte",
    name: "Admin Private Menu",
    component: Menuadminpte,
    icon: <MenuBookIcon />,
    is_private: true,
    user_type: "admin",
  },
];

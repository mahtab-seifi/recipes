import React, { Component } from "react";
import list from "./icons/options-lines.png";
import home from "./icons/house-black-silhouette-without-door.png";
import saved from "./icons/bookmark.png";
import category from "./icons/apps.png";
import "./style.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
     <nav style={{zIndex:"2"}}>
        <Link to="/"> <img src={home} alt="" /></Link>
        <Link to="/category"> <img src={category} alt="" /></Link>
        <Link to="/saved">  <img src={saved} alt="" /></Link>
        <Link to="/List">  <img src={list} alt="" /></Link>
      </nav>
     
    </>
  );
}

export default Navigation;

import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="nav">
        <div className="nav-sub"><h1> <Link to='/'><i className="fa-solid fa-house-user" style={{color:"black"}}></i></Link></h1></div>
      <div className="nav-sub">
        <a href="#breakfast">Breakfast for you</a>
      </div>
      <div className="nav-sub">
        <a href="#lunch">Time for lunch</a>
      </div>
      <div className="nav-sub">
        <a href="#">Can i have snacks</a>
      </div>
      <div className="nav-sub">
        <a href="#">Dinner</a>
      </div>
      <div className="nav-sub">
        <a href="#">Burgers and Beverages</a>
      </div>
      <div className="nav-sub">
        <a href="#">more..</a>
      </div>
    
    </div>
    <Outlet/>
    </>
  );
}

import React from 'react';
import './NavBar.css';
import home from '../assets/home.png'; // home icon
import search from '../assets/search.png'; // search icon

export default function NavBar(props) {
  return (
    <div className="navbar">

      <ul className="navbar-left">
        <li className="navbar-name"><a href="#">Helo</a></li>
        <li className="navbar-home">
            <a href="#"><img src={home} alt="homeIcon"/></a>
        </li>
        <li className="navbar-search">
            <a href="#"><img src={search} alt="searchIcon"/></a>
        </li>
      </ul>

      <ul className="navbar-center">
        <li className="navbar-dashboard">Dashboard</li>
      </ul>

      <ul className="navbar-right">
        <li className="navbar-logout">Logout</li>
      </ul>

    </div>
  );
}
import React from 'react';
import './Login.css';
import Button from './Button';
import logo from '../assets/logo.png';

export default function Login(props) {
  return (
    <div className="App">
      <div className="login">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <div className="heading">Helo</div>
        <Button/>
      </div>
    </div>
  );
}
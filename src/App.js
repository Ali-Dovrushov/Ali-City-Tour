/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './components/Navbar/Navbar.jsx';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import TourList from './components/TourList/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <Switch>
          <Route path='/about' component={ About }/>
          <Route path='/home' component={ Home }/>
          <Route path='/'component={ TourList }/>
        </Switch>
      </header>
      <footer className='footer__navbar'>
        <p>Copyright © <time>2021</time> Dovrushov App.</p>
        <address>Baku, Azerbaijan.</address>
        <p>Dev Education.</p>
        <p>Company: X-Critical.</p>
        <p>Support: Sevinc, Musa and Reactjs.org.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

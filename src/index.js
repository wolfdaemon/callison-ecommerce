import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './Home';
import { NavBar } from './NavBar';
import './NavBar.css';
import { ItemsForSale } from './ItemsForSale.js';
import NavRouter from './NavRouter';



  ReactDOM.render(
  // {<HomePage />,}
     <NavRouter />,
  document.getElementById('root'));
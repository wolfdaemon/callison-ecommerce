import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage } from './HomePage';
import { NavBar } from './NavBar';
import './NavBar.css';
import { ItemsForSale } from './ItemsForSale.css';
import MyRouter from './MyRouter';



  ReactDOM.render(
  // {<HomePage />,}
     <MyRouter />,
  document.getElementById('root'));
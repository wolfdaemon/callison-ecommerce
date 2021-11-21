import 'bootstrap/dist/css/bootstrap.css'; // importing Bootstrap CSS
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './NavBar.css';
import NavRouter from './NavRouter';



  ReactDOM.render(
  // {<HomePage />,}
     <NavRouter />,
  document.getElementById('root'));
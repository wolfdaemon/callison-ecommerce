/* eslint-disable no-unused-vars */
import React from 'react';
import './NavBar.css';

// imports from react-bootstap


export class NavBar extends React.Component {
render() {
    const pages =[<button>Home</button>, <button>Contact</button>, <button>Shop</button>, <button>Cart</button>];
    const links = pages.map(page => {
        return (
          <a href={"/" + page}>
            { page }
          </a>
        )
      });
    return <nav>{ links }</nav>;
}
}

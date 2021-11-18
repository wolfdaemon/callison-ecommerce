import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// importing our page components for router to use
import { Home } from "./Home";
import { ItemsForSale } from "./ItemsForSale";

//...

export default function NavRouter() {
  return (
    <Router>
      <div>
            <Link to="/"><button>Home</button></Link>
        
            <Link to="/Shop"><button>Shop</button></Link>
        
            <Link to="/cart"><button>Cart</button></Link>
        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<ItemsForSale />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

function Cart(){
    return <div>Nothing to see here </div>
}
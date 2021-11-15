import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ItemsForSale } from "./ItemsForSale.";

//...

export default function MyRouter() {
  return (
    <Router>
      <div>
            <Link to="/"><button>Home</button></Link>
        
            <Link to="/dashboard"><button>Shop</button></Link>
        
            <Link to="/cart"><button>Cart</button></Link>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Shop">
            <ItemsForSale />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
    return <div>Nothing to see here </div>
}

function Cart(){
    return <div>Nothing to see here </div>
}
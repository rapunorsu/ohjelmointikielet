import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from'./components/products';
import Products1 from './components/show_products';
import Shoppingcart from './components/shopcart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App =() => {

  const [myProducts, setMyProducts] = useState(Products);

  return (
    <>
    <header className="App-header">
    <h1> VERKKOKAUPPA </h1>

    </header>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <h4><b>
              <Link to="/">Home</Link>
              <Link to="/shopcart">Ostoskori</Link>
              </b></h4>
            </li>
            <li>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shopcart">
            <Shoppingcart Prod = {myProducts} SetProd ={setMyProducts} />
          </Route>
          <Route path="/">
            <Home myprod={myProducts} setmypr={setMyProducts}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>

  );

          }

function Home({myprod, setmypr}) {
  return (
    <>
    <div className="App">

      <section className="konsoli">
      <h1>TUOTTEET</h1>
      <Products1 products = {myprod} setProds={setmypr}/>
      </section>
    </div></>
)     
}

export default App;

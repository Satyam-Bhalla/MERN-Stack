import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/shared/home";
import Navbar from "./components/shared/navbar";
import Products from "./components/products";
import Posts from './components/posts';
import ProductDetails from './components/productDetails';
import AdminDashboard from "./components/admin/dashboard";
import PageNotFound from "./components/shared/page-not-found";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/page-not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

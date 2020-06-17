import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/styles/tailwind-build.css";

import App from "./components/App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import NotMatch from "./pages/NotMatch";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route component={NotMatch} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

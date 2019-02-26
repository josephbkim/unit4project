import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import StoreListPage from "./components/StoreListPage";
import SitesListPage from "./components/Site/SitesListPage";
import Site from "./components/Site/Site";
import Store from "./components/Store";

class App extends Component {
  render() {
    return (
      <Router>
        <WebDiv>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/stores" component={StoreListPage} />
            <Route exact path="/stores/:storeid" component={Store} />
            <Route exact path="/sites" component={SitesListPage} />
            <Route exact path="/sites/:siteid" component={Site} />
          </Switch>
        </WebDiv>
      </Router>
    );
  }
}

export default App;

const WebDiv = styled.div`
  font-family: "Kreon", serif;
  background-color: #497195;
`;

// const MapBox = styled.div`
//   justify-self: center;
//   height: 85vh;
//   width: 65vw;
//   margin: 5vh auto auto;
//   box-shadow: 5px 10px 10px black;
//   border: 1px solid white;
// `;

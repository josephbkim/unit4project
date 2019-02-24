import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import StoreListPage from "./components/StoreListPage";
import SitesListPage from "./components/SitesListPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <WebDiv>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/stores" component={StoreListPage} />
            <Route exact path="/sites" component={SitesListPage} />
          </Switch>
        </WebDiv>
      </Router>
    );
  }
}

export default App;

const WebDiv = styled.div`
  background-color: #497195;
`;

import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Store from "./Store";
import { get } from "https";

class StoreListPage extends Component {
  state = {
    stateList: {
      name: "",
      site: [{}],
      stores: [{}]
    }
  };

  componentDidMount = () => {
    this.getThisState();
  };

  getThisState = () => {
    axios.get(`api/states`).then(res => {
      console.log(res.data);
      let stateName = res.data.name;
      this.setState({ stateList: res.data });
      console.log(stateName);
    });
  };

  render() {
    return (
      <ConDiv>
        <h1>All Stores in {this.stateName}</h1>
        <StoreDiv>
          <Store />
        </StoreDiv>
      </ConDiv>
    );
  }
}

export default StoreListPage;

const ConDiv = styled.div`
  display: block;
  text-align: center;
  justify-items: center;
  height: 100vh;
  margin: auto;
`;

const StoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

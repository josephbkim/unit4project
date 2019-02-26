import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Store from "./Store";
import { get } from "https";

class StoreListPage extends Component {
  state = {
    storeList: [
      {
        name: ""
      }
    ]
  };

  componentDidMount = () => {
    this.getAllStores();
  };

  getAllStores = () => {
    axios.get(`api/stores`).then(res => {
      console.log(res.data);
      this.setState({ storeList: res.data });
    });
  };

  render() {
    return (
      <ConDiv>
        <h1>All Stores in Georgia</h1>
        {this.state.storeList.map((store, i) => (
          <div key={i}>{store.name}</div>
        ))}
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

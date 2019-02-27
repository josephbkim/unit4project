import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Store from "./Store";
import MapDisplay from "./MapDisplay";

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
    axios.get(`api/v1/stores`).then(res => {
      console.log(res.data);
      this.setState({ storeList: res.data });
    });
  };

  render() {
    return (
      <ConDiv>
        <MainCompBox>
          <h1>All Stores in Georgia</h1>
          {this.state.storeList.map((store, i) => (
            <div key={i}>{store.name}</div>
          ))}
        </MainCompBox>
        <MapBox>
          <MapDisplay />
        </MapBox>
      </ConDiv>
    );
  }
}

export default StoreListPage;

const ConDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const MainCompBox = styled.div`
  height: 85vh;
  width: 30vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
  background-color: whitesmoke;
  /* padding-left: 1.5vw; */
  /* text-decoration: underline; */
  text-align: center;
`;

const MapBox = styled.div`
  justify-self: center;
  height: 85vh;
  width: 65vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
`;

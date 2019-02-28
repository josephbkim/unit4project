import React, { Component } from "react";
import styled from "styled-components";

import State from "./State";
import GeorgiaMapDisplay from "./Maps/GeorgiaMapDisplay";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <StatesDispBox>
          <h2>States</h2>
          <State />
        </StatesDispBox>
        <MapBox>
          <GeorgiaMapDisplay />
        </MapBox>
      </HomeDiv>
    );
  }
}

export default HomePage;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  height: 100vh;
  width: 100vw;
`;

const StatesDispBox = styled.div`
  height: 85vh;
  width: 30vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
  background-color: whitesmoke;
  text-align: center;
  border-radius: 3px;
  background-color: #6eaae1;
`;

const MapBox = styled.div`
  justify-self: center;
  height: 85vh;
  width: 65vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
  border-radius: 3px;
`;

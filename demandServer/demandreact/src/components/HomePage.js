import React, { Component } from "react";
import styled from "styled-components";
import MapDisplay from "./MapDisplay";
import State from "./State";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <StatesDispBox>
          <h3>States</h3>
          <State />
        </StatesDispBox>
        <MapBox>
          <MapDisplay />
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
  align-content: space-around;
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

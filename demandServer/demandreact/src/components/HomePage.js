import React, { Component } from "react";
import styled from "styled-components";
import MapDisplay from "./MapDisplay";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <StatesDispBox>
          <h4>States</h4>
        </StatesDispBox>{" "}
        />
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
`;

const MapBox = styled.div`
  justify-self: center;
  height: 85vh;
  width: 65vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
`;

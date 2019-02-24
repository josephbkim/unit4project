import React, { Component } from "react";
import styled from "styled-components";
import MapDisplay from "./MapDisplay";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <MapDisplay />
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

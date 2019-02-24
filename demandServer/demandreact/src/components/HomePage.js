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
  display: grid;
  justify-content: center;
  height: 85vh;
  width: 100vh;
  padding-top: 2vh;
`;

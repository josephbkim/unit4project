import React, { Component } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <MapBox>
          <Iframe
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0"
            url="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4FfHcU28YgR5xBP7BC8hGY&key=AIzaSyCUWLSP8SJ9Zy2D-fTBPmwMbxON693vZmA"
            position="relative"
            allowfullscreen
          />
        </MapBox>
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

const MapBox = styled.div`
  height: 70vh;
  width: 70vw;
  border: 1px solid grey;
  padding: auto;
`;

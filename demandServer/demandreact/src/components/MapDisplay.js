import React, { Component } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

class MapDisplay extends Component {
  render() {
    return (
      // <div>
      <MapBox>
        <Iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          url="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4FfHcU28YgR5xBP7BC8hGY&key=AIzaSyCUWLSP8SJ9Zy2D-fTBPmwMbxON693vZmA"
          position="center"
          allowfullscreen
        />
      </MapBox>
      // {/* </div> */}
    );
  }
}

export default MapDisplay;

const MapBox = styled.div`
  justify-self: center;
  height: 95vh;
  width: 95vw;
  margin: auto;
  box-shadow: 5px 10px 10px black;
`;

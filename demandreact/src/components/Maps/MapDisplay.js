import React, { Component } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

class MapDisplay extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_EMBED_API_KEY;
    return (
      // <MapBox>

      <Iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0"
        // url={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4FfHcU28YgR5xBP7BC8hGY&key=${API_KEY}`}
        url={`https://www.google.com/maps/embed/v1/place?q=33.7490,-84.38801&zoom=7&maptype=roadmap&key=${API_KEY}`}
        position="center"
        allowfullscreen
        onClick="/stores"
      />
      // </MapBox>
    );
  }
}

export default MapDisplay;

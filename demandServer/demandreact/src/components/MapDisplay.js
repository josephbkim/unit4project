import React, { Component } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div> {text} </div>;

class MapDisplay extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 33.24,
  //     lng: -83.44
  //   },
  //   zoom: 7
  // };

  render() {
    const API_KEY = process.env.REACT_APP_EMBED_API_KEY;
    return (
      // <div>
      <MapBox>
        {/* <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            apiKey={API_KEY}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          />

          <AnyReactComponent
            lat={33.247875}
            lng={-83.441162}
            text={"Georgia"}
          />
        </div> */}
        <Iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          url={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4FfHcU28YgR5xBP7BC8hGY&key=${API_KEY}`}
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

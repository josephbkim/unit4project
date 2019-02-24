import React, { Component } from "react";
import styled from "styled-components";

class Site extends Component {
  render() {
    return <SiteBox />;
  }
}

export default Site;

const SiteBox = styled.div`
  justify-self: center;
  height: 30vh;
  width: 60vw;
  background-color: black;
  margin: 2px;
`;

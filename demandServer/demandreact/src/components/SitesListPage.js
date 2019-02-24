import React, { Component } from "react";
import styled from "styled-components";

import Site from "./Site";

class SitesListPage extends Component {
  render() {
    return (
      <ConDiv>
        <h1>This is the sites list SitesListPage</h1>
        <SiteDiv>
          <Site />
        </SiteDiv>
      </ConDiv>
    );
  }
}

export default SitesListPage;

const ConDiv = styled.div`
  display: block;
  text-align: center;
  justify-items: center;
  height: 100vh;
  margin: auto;
`;

const SiteDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

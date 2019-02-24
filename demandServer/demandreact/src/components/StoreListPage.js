import React, { Component } from "react";
import styled from "styled-components";

import Store from "./Store";


class StoreListPage extends Component {
  render() {
    return (
      <ConDiv>
        <h1>This is the Store List Page</h1>
        <StoreDiv>
          <Store />
        </StoreDiv>
      </ConDiv>
    );
  }
}

export default StoreListPage;

const ConDiv = styled.div`
  display: block;
  text-align: center;
  justify-items: center;
  height: 100vh;
  margin: auto;
`;

const StoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

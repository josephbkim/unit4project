import React, { Component } from "react";
import styled from "styled-components";

class Store extends Component {
  render() {
    return <StoreBox />;
  }
}

export default Store;
const StoreBox = styled.div`
  justify-self: center;
  height: 30vh;
  width: 50vw;
  background-color: black;
  margin: 2px;
`;

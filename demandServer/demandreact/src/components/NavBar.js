import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <StyledButton>Home</StyledButton>
        <StyledButton>Stores</StyledButton>
        <StyledButton>Sites</StyledButton>
      </StyledNav>
    );
  }
}

export default NavBar;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0478e1;
  height: 5vh;
  box-shadow: 2px 3px #304a62;
`;

const StyledButton = styled.button`
  height: 60%;
  width: 25%;
  margin: auto;
  background-color: #6eaae1;
  border: 1px solid #304a62;
`;

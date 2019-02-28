import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <Link to="/">Home</Link>

        <Link to="/stores">Stores</Link>

        <Link to="/sites">Sites</Link>
      </StyledNav>
    );
  }
}

export default NavBar;

const StyledNav = styled.div`
  display: flex;
  font-size: 2.5vh;
  font-family: "Kreon", serif;
  justify-content: space-around;
  align-items: center;
  background-color: #0478e1;
  height: 5vh;
  box-shadow: 2px 5px 5px;
  margin: auto;
`;

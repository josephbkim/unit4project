import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class State extends Component {
  state = {
    stateList: [
      {
        name: ""
      }
    ]
  };

  componentDidMount = () => {
    this.getAllStates();
  };

  getAllStates = () => {
    axios.get(`api/v1/states`).then(res => {
      console.log(res.data);
      this.setState({ stateList: res.data });
    });
  };

  render() {
    return (
      <StateDiv>
        {this.state.stateList.map((eachState, i) => (
          <ol>
            <div key={i}>
              <li>{eachState.name}</li>
            </div>
          </ol>
        ))}
      </StateDiv>
    );
  }
}

export default State;

const StateDiv = styled.div`
  width: 90%;
  margin: auto;
  text-align: left;
  font-size: 3vh;
  text-decoration: none;
  border: 1px solid white;
  background-color: white;
  border-radius: 2px;
`;

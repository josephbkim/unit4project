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
    axios.get(`api/states`).then(res => {
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
  text-align: left;
  padding-left: 2vw;
  text-decoration: none;
`;

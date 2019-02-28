import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class AddSiteForm extends Component {
  state = {
    thisSite: {
      name: "",
      numDeliveries: "",
      totPurAmnt: ""
    }
  };

  handleChange = event => {
    const newSiteState = { ...this.state.thisSite };
    newSiteState[event.target.name] = event.target.value;
    this.setState({ thisSite: newSiteState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const thePowPow = this.state.thisSite;
    axios.post(`/api/v1/sites/`, thePowPow).then(res => {
      this.props.getAllSites();
      this.props.toggleAddForm();
    });
  };

  render() {
    return (
      <AddFormStyles>
        <h1>This is the Add Site Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <AddInput
              className="input"
              name="name"
              type="text"
              placeholder="name"
              defaultValue={this.state.thisSite.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <AddInput
              className="input"
              name="numDeliveries"
              type="number"
              placeholder="Number of Deliveries"
              defaultValue={this.state.thisSite.numDeliveries}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <AddInput
              className="input"
              name="totPurAmnt"
              type="float"
              placeholder="Total Purchase Amount"
              defaultValue={this.state.thisSite.totPurAmnt}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Site</button>
        </form>
      </AddFormStyles>
    );
  }
}

export default AddSiteForm;

const AddFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Kreon", serif;
  background-color: white;
  border-radius: 3px;
  margin: auto;
  padding: 3px;
`;

const AddInput = styled.input`
  width: 80%;
`;

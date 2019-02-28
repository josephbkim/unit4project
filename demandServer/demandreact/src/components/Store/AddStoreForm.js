import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class AddStoreForm extends Component {
  state = {
    thisStore: {
      name: "",
      location: "",
      numDeliveries: ""
    }
  };

  handleChange = event => {
    const newStoreState = { ...this.state.thisStore };
    newStoreState[event.target.name] = event.target.value;
    this.setState({ thisStore: newStoreState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const thePowPow = this.state.thisStore;
    axios.post(`/api/v1/stores/`, thePowPow).then(res => {
      this.props.toggleAddForm();
      this.props.getAllStores();
    });
  };

  render() {
    return (
      <AddFormStyles>
        <h2>New Store Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <AddInput
              className="input"
              name="name"
              type="text"
              placeholder="name"
              defaultValue={this.state.thisStore.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <AddInput
              className="input"
              name="location"
              type="text"
              placeholder="Location"
              defaultValue={this.state.thisStore.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <AddInput
              className="input"
              name="numDeliveries"
              type="number"
              placeholder="Number of Deliveries"
              defaultValue={this.state.thisStore.numDeliveries}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Site</button>
        </form>
      </AddFormStyles>
    );
  }
}

export default AddStoreForm;

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

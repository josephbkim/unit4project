import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class EditStoreForm extends Component {
  state = {
    thisStore: [
      {
        store_id: "",
        name: "",
        location: "",
        storeLong: "",
        storeLat: "",
        numDeliveries: "",
        stateId: ""
      }
    ]
  };

  handleChange = event => {
    const newStoreState = { ...this.state.thisStore };
    newStoreState.name = document.getElementById("name").defaultValue;
    newStoreState.location = document.getElementById("location").defaultValue;
    // newStoreState.storeLong = document.getElementById("storeLong").defaultValue;
    // newStoreState.storeLat = document.getElementById("storeLat").defaultValue;
    newStoreState.numDeliveries = document.getElementById(
      "numDeliveries"
    ).defaultValue;
    newStoreState[event.target.name] = event.target.value;
    this.setState({ thisStore: newStoreState });
  };

  handleSubmit = event => {
    event.preventDefault();
    let thisStoreId = this.props.thisStore.store_id;
    console.log(thisStoreId);
    const thePewPew = this.state.thisStore;
    axios.put(`/api/v1/stores/${thisStoreId}/`, thePewPew).then(res => {
      this.props.toggleEditForm();
      this.props.getThisStore();
    });
  };

  render() {
    return (
      <PageDiv>
        <h3>Store Edit Form</h3>
        <FormDiv onSubmit={this.handleSubmit}>
          <label>
            <Input
              className="input"
              name="name"
              type="text"
              placeholder="name"
              id="name"
              defaultValue={this.props.thisStore.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Input
              className="input"
              name="location"
              type="text"
              placeholder="Address"
              id="location"
              defaultValue={this.props.thisStore.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Input
              className="input"
              name="numDeliveries"
              type="number"
              placeholder="Number of Deliveries"
              id="numDeliveries"
              defaultValue={this.props.thisStore.numDeliveries}
              onChange={this.handleChange}
            />
          </label>
          <StoreButton type="submit">Edit Site</StoreButton>
        </FormDiv>
      </PageDiv>
    );
  }
}

export default EditStoreForm;

const PageDiv = styled.div``;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 40%;
`;

const StoreButton = styled.button`
  width: 40%;
`;

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class AddStoreForm extends Component {
  state = {
    thisStore: {
      name: "",
      location: "",
      storeLong: "",
      storeLat: "",
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
      this.props.getAllStores();
      this.props.toggleAddForm();
    });
  };

  render() {
    return (
      <div>
        <h1>This is the Add Store Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="name"
              defaultValue={this.state.thisStore.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="location"
              type="text"
              placeholder="Location"
              defaultValue={this.state.thisStore.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="storeLong"
              type="text"
              placeholder="Store Longitude"
              defaultValue={this.state.thisStore.storeLong}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="storeLat"
              type="text"
              placeholder="Store Latitude"
              defaultValue={this.state.thisStore.storeLat}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
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
      </div>
    );
  }
}

export default AddStoreForm;

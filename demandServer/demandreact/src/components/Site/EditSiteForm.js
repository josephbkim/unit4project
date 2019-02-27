import React, { Component } from "react";
import axios from "axios";

class EditSiteForm extends Component {
  state = {
    thisSite: {
      name: "",
      numDeliveries: "",
      totPurAmnt: ""
    }
  };

  handleChange = event => {
    const newSiteState = { ...this.state.thisSite };
    newSiteState.name = document.getElementById("name").defaultValue;
    newSiteState.numDeliveries = document.getElementById(
      "numDeliveries"
    ).defaultValue;
    newSiteState.totPurAmnt = document.getElementById(
      "totPurAmnt"
    ).defaultValue;
    newSiteState[event.target.name] = event.target.value;
    this.setState({ thisSite: newSiteState });
  };

  handleSubmit = event => {
    event.preventDefault();
    let thisSiteId = this.props.thisSite.site_id;

    const thePowPow = this.state.thisSite;
    axios.put(`/api/v1/sites/${thisSiteId}/`, thePowPow).then(res => {
      this.props.toggleEditForm();
      this.props.getThisSite();
    });
  };

  render() {
    return (
      <div>
        <h3>Edit Site Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="name"
              id="name"
              defaultValue={this.props.thisSite.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="numDeliveries"
              type="number"
              placeholder="Number of Deliveries"
              id="numDeliveries"
              defaultValue={this.props.thisSite.numDeliveries}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="totPurAmnt"
              type="float"
              placeholder="Total Purchase Amount"
              id="totPurAmnt"
              defaultValue={this.props.thisSite.totPurAmnt}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Edit Site</button>
        </form>
      </div>
    );
  }
}

export default EditSiteForm;

import React, { Component } from "react";
import axios from "axios";

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
    this.setState({ siteState: newSiteState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const thePowPow = this.state.thisSite;
    axios.post(`/api/v1/sites`, thePowPow).then(res => {
      this.props.getAllSites();
    });
  };

  render() {
    return (
      <div>
        <h1>This is the Add Site Form</h1>
        <form onSubmit={this.handlesubmit}>
          <label>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="name"
              value={this.state.thisSite.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="numDeliveries"
              type="number"
              placeholder="Number of Deliveries"
              value={this.state.thisSite.numDeliveries}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              name="totPurAmnt"
              type="float"
              placeholder="Total Purchase Amount"
              value={this.state.thisSite.totPurAmnt}
              onChange={this.handleChange}
            />
          </label>
          <button>Add Site</button>
        </form>
      </div>
    );
  }
}

export default AddSiteForm;

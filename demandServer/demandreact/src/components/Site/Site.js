import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import EditSiteForm from "./EditSiteForm";

class Site extends Component {
  state = {
    thisSite: [
      {
        site_id: "",
        name: "",
        numDeliveries: "",
        totPurAmnt: "",
        state_Id: ""
      }
    ],
    editFormVisible: false
  };

  componentDidMount = () => {
    this.getThisSite();
  };

  getThisSite = () => {
    let newSiteId = this.props.match.params.siteid;
    console.log(newSiteId);
    axios.get(`/api/v1/sites/${newSiteId}`).then(res => {
      this.setState({ thisSite: res.data });
    });
  };

  siteDelete = () => {
    let newSiteId = this.props.match.params.siteid;
    axios
      .delete(`/api/v1/sites/${newSiteId}`)
      .then(() => this.props.history.goBack());
  };

  toggleEditForm = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible });
  };

  render() {
    return (
      <SitePageDiv>
        <SiteBox>
          <h2>Current Site</h2>
          <p>Project Name: {this.state.thisSite.name}</p>
          <p>Project Id: {this.state.thisSite.site_id}</p>
          <p>Total Deliveries: {this.state.thisSite.numDeliveries}</p>
          <ButtonDiv>
            <button onClick={this.siteDelete}>Delete</button>
            <button onClick={this.toggleEditForm}>Edit</button>
            <div>
              {this.state.editFormVisible ? (
                <EditSiteForm
                  getThisSite={this.getThisSite}
                  toggleEditForm={this.toggleEditForm}
                  thisSite={this.state.thisSite}
                />
              ) : null}
            </div>
          </ButtonDiv>
        </SiteBox>
      </SitePageDiv>
    );
  }
}

export default Site;

const SitePageDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const SiteBox = styled.div`
  justify-self: center;
  height: 50vh;
  width: 50vw;
  background-color: white;
  margin: 15vh auto auto;
  box-shadow: 5px 10px 10px black;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
`;

const ButtonDiv = styled.div`
  height: 20%;
  width: 100%;
  border: 1px solid black;
`;

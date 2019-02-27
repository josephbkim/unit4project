import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import MapDisplay from "../MapDisplay";
import AddSiteForm from "./AddSiteForm";

class SitesListPage extends Component {
  state = {
    siteList: [
      {
        name: "",
        site_id: ""
      }
    ],
    addFormVisible: false
  };

  componentDidMount = () => {
    this.getAllSites();
  };

  getAllSites = () => {
    axios.get(`api/v1/sites`).then(res => {
      console.log(res.data);
      this.setState({ siteList: res.data });
    });
  };

  toggleAddForm = () => {
    this.setState({ addFormVisible: !this.state.addFormVisible });
  };

  render() {
    return (
      <SiteDiv>
        <MainCompBox>
          <h1>All Sites in Georgia</h1>
          {this.state.siteList.map((site, i) => (
            <div key={i}>
              <Link to={`/sites/${site.site_id}`}>{site.name}</Link>
            </div>
          ))}
          <button onClick={this.toggleAddForm}>Add New Site</button>
          <div>
            {this.state.addFormVisible ? (
              <AddSiteForm getAllSites={this.getAllSites} />
            ) : null}
          </div>
        </MainCompBox>
        <MapBox>
          <MapDisplay />
        </MapBox>
      </SiteDiv>
    );
  }
}

export default SitesListPage;

const SiteDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const MainCompBox = styled.div`
  height: 85vh;
  width: 30vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
  background-color: whitesmoke;
  /* padding-left: 1.5vw; */
  /* text-decoration: underline; */
  text-align: center;
`;

const MapBox = styled.div`
  justify-self: center;
  height: 85vh;
  width: 65vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
`;

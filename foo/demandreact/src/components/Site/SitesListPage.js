import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import MapDisplay from "../Maps/MapDisplay";
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
            <SiteBox key={i}>
              <Link to={`/sites/${site.site_id}`}>{site.name}</Link>
            </SiteBox>
          ))}
          <button onClick={this.toggleAddForm}>Add New Site</button>
          <div>
            {this.state.addFormVisible ? (
              <AddSiteForm
                getAllSites={this.getAllSites}
                toggleAddForm={this.toggleAddForm}
              />
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
  background-color: #6eaae1;
  text-align: center;
  border-radius: 3px;
`;

const MapBox = styled.div`
  justify-self: center;
  height: 85vh;
  width: 65vw;
  margin: 5vh auto auto;
  box-shadow: 5px 10px 10px black;
  border: 1px solid white;
  border-radius: 3px;
`;

const SiteBox = styled.div`
  width: 85%;
  margin: 1vh auto;
  text-align: left;
  font-size: 3vh;
  text-decoration: none;
  border: 1px solid white;
  background-color: white;
  border-radius: 2px;
  padding: 4px;
`;

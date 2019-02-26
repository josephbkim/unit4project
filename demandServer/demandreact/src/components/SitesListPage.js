import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Site from "./Site";

class SitesListPage extends Component {
  state = {
    siteList: [
      {
        name: ""
      }
    ]
  };

  componentDidMount = () => {
    this.getAllSites();
  };

  getAllSites = () => {
    axios.get(`api/sites`).then(res => {
      console.log(res.data);
      this.setState({ siteList: res.data });
    });
  };

  render() {
    return (
      <ConDiv>
        <h1>All Sites in Georgia</h1>
        {this.state.siteList.map((site, i) => (
          <div key={i}>
            <Link to={`/sites/${site._id}`}>{site.name}</Link>
          </div>
        ))}
      </ConDiv>
    );
  }
}

export default SitesListPage;

const ConDiv = styled.div`
  display: block;
  text-align: center;
  justify-items: center;
  height: 100vh;
  margin: auto;
`;

const SiteDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 100vh;
  width: 100vw;
`;

import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Store from "../Store/Store";
import MapDisplay from "../MapDisplay";
import AddStoreForm from "./AddStoreForm";

class StoreListPage extends Component {
  state = {
    storeList: [
      {
        name: ""
      }
    ],
    addFormVisible: false
  };

  componentDidMount = () => {
    this.getAllStores();
  };

  getAllStores = () => {
    axios.get(`api/v1/stores/`).then(res => {
      console.log(res.data);
      this.setState({ storeList: res.data });
    });
  };

  toggleAddForm = () => {
    this.setState({ addFormVisible: !this.state.addFormVisible });
  };

  render() {
    return (
      <ConDiv>
        <MainCompBox>
          <h1>All Stores in Georgia</h1>
          {this.state.storeList.map((store, i) => (
            <div key={i}>
              <Link to={`/stores/${store.store_id}`}>{store.name}</Link>
            </div>
          ))}
          <button onClick={this.toggleAddForm}>Add New Store</button>
          <div>
            {this.state.addFormVisible ? (
              <AddStoreForm
                getAllStores={this.getAllStores}
                toggleAddForm={this.toggleAddForm}
              />
            ) : null}
          </div>
        </MainCompBox>
        <MapBox>
          <MapDisplay />
        </MapBox>
      </ConDiv>
    );
  }
}

export default StoreListPage;

const ConDiv = styled.div`
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

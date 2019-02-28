import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Store from "../Store/Store";
import MapDisplay from "../Maps/MapDisplay";
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
            <StoreBox key={i}>
              <Link to={`/stores/${store.store_id}`}>{store.name}</Link>
            </StoreBox>
          ))}
          <button onClick={this.toggleAddForm}>Add New Store</button>
          <AddBox>
            {this.state.addFormVisible ? (
              <AddStoreForm
                getAllStores={this.getAllStores}
                toggleAddForm={this.toggleAddForm}
              />
            ) : null}
          </AddBox>
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

const StoreBox = styled.div`
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

const AddBox = styled.div`
  /* justify-: center; */
`;

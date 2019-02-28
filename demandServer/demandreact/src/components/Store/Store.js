import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import EditStoreForm from "./EditStoreForm";

class Store extends Component {
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
    ],
    editFormVisible: false
  };

  componentDidMount = () => {
    this.getThisStore();
  };

  getThisStore = () => {
    let newStoreId = this.props.match.params.storeid;
    axios.get(`/api/v1/stores/${newStoreId}`).then(res => {
      this.setState({ thisStore: res.data });
    });
  };

  storeDelete = () => {
    let newStoreId = this.props.match.params.storeid;
    console.log(newStoreId);
    axios
      .delete(`/api/v1/stores/${newStoreId}`)
      .then(() => this.props.history.goBack());
  };

  toggleEditForm = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible });
  };

  render() {
    return (
      <StorePageDiv>
        <StoreBox>
          <div>
            <h2>Current Store</h2>
            <p>Store Name: {this.state.thisStore.name}</p>
            <p>Store Id: {this.state.thisStore.store_id}</p>
            <p>Store Location: {this.state.thisStore.location}</p>
            {/* <p>Store Longitude: {this.state.thisStore.storeLong}</p>
            <p>Store Latitude: {this.state.thisStore.storeLat}</p> */}
            <p>
              Total Number of Deliveries: {this.state.thisStore.numDeliveries}
            </p>
            <p>State Id: {this.state.thisStore.stateId}</p>
          </div>
          <ButtonDiv>
            <ButtonStyle onClick={this.storeDelete}>Delete</ButtonStyle>
            <ButtonStyle onClick={this.toggleEditForm}>Edit</ButtonStyle>
            <div>
              {this.state.editFormVisible ? (
                <EditStoreForm
                  getThisStore={this.getThisStore}
                  toggleEditForm={this.toggleEditForm}
                  thisStore={this.state.thisStore}
                />
              ) : null}
            </div>
          </ButtonDiv>
        </StoreBox>
      </StorePageDiv>
    );
  }
}

export default Store;

const StorePageDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const StoreBox = styled.div`
  justify-self: center;
  /* height: 50vh; */
  width: 50vw;
  background-color: white;
  margin: 15vh auto auto;
  box-shadow: 5px 10px 10px black;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
`;

const ButtonDiv = styled.div`
  height: 20%;
  /* border: 1px solid black; */
`;

const ButtonStyle = styled.button`
  height: 10%;
  width: 20%;
  margin: 2%;
`;

import React, { Component } from "react";
import styled from "styled-components";

class Site extends Component {
  state = {
    thisSite: [
      {
        site_id: "",
        name: "",
        numDeliveries: "",
        totPurAmnt: "",
        stateId: ""
      }
    ]
  };
  render() {
    return (
      <SitePageDiv>
        <SiteBox>
          <h2 />
        </SiteBox>{" "}
        />
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
  height: 30vh;
  width: 50vw;
  background-color: white;
  margin: 15vh auto auto;
`;

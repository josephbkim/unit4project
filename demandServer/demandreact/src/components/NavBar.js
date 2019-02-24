import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Spacing from "@material-ui/system";
import { Grid } from "@material-ui/core";

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <StyledTypography variant="title" color="inherit">
              <div className={classes.buttons}>
                <Button variant="contained" color="primary">
                  Home
                </Button>
                <Button variant="contained" color="primary">
                  Stores
                </Button>
                <Button variant="contained" color="primary">
                  Sites
                </Button>
              </div>
            </StyledTypography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStylesNavBar;

const styles = theme => ({
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

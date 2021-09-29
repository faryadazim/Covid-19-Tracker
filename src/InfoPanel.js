import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SideBar from "./pages/SideBar";
import Nav from "./components/Nav";
import Card from "./components/Card";

export default function InfoPanel() {
  return (
    <Box className="main-container">
      <Grid container>
        <Grid item xs={12} md={9} className="main-container-major">
          <Nav />

          <div
            style={{
              backgroundColor: "white",
              height: "95%",
              padding: "8px",
            }}
          >
            <div
              style={{
                border: "1px solid #1976d2",
                height: "100%",
                width: "100%",
              }}
            >
              <Card />

              <div
                style={{
                  height: "69.5%",
                  backgroundColor: "red",
                  width: "98%",
                  margin: "auto auto",
                  marginTop: "22px",
                }}
              >
                helho
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          className="main-container-sideBar"
          style={{ backgroundColor: "#1976d2" }}
        >
          <SideBar />
        </Grid>
      </Grid>
    </Box>
  );
}

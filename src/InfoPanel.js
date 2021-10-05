import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SideBar from "./pages/SideBar";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Chart from "./components/Chart";
import { fetchAPI } from "./API/fetchAPI";

export default function InfoPanel() {
  // const [worldWide, setworldWide] = useState();
  useEffect(() => {
    // async function fetchFunction() {
    //   const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    //   const json = await response.json();
    //   setworldWide(json);
    // }
    // console.log(worldWide);
    fetchAPI();
  }, []);

  return (
    <Box className="main-container">
      <Grid container>
        <Grid item xs={12} md={8} lg={9} className="main-container-major">
          <Nav />

          <div
            style={{
              backgroundColor: "white",
              height: "93%",
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
                  height: "64.5%",
                  width: "98%",
                  margin: "auto auto",
                  marginTop: "29px",
                }}
              >
                <Chart />
                <div className="footer-div">
                  <h4> Covid 19 Tracker Pilot Project </h4>
                  <p>
                    Devolped by Faryad Azim Under the shadow of Sir Zia Khan ,
                    Mohsin Khalid,Ammir Pinger, Amin Alam , Bashir Aziz and
                    more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          className="main-container-sideBar"
          style={{ backgroundColor: "#1976d2" }}
        >
          <SideBar />
        </Grid>
      </Grid>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SideBar from "./pages/SideBar";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Chart from "./components/Chart";
import { fetchAPI } from "./API/fetchAPI";
import { fetchAPIWorld } from "./API/fetchAPI";

export default function InfoPanel() {
  const [cardValue, setcardValue] = useState({});
  const [rawData, setrawData] = useState([]);
  const [global, setGlobal] = useState(rawData);

  useEffect(() => {
    async function foo() {
      try {
        let data = await fetchAPI();
        setrawData(data);
      } catch (error) {
        console.log(error);
      }
    }
    foo();
    async function worldRecord() {
      try {
        let data = await fetchAPIWorld();
        setcardValue(data);
        setGlobal(data);
      } catch (error) {
        console.log(error);
      }
    }
    worldRecord();
  }, []);
  const handleChanger = (e) => {
    rawData.map((country) => {
      if (e === country.country) {
        setcardValue(country);
      }
      if (e === "Global") {
        setcardValue(global);
      }
    });
  };
  return (
    <Box className="main-container">
      <Grid container>
        <Grid item xs={12} md={8} lg={9} className="main-container-major">
          <Nav data={rawData} handleChanger={handleChanger} />
          <div className="card-outside">
            <div className="card-insider">
              <Card cardValue={cardValue} />
              <div className="chart-insider">
                <Chart datas={cardValue} />
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
          className="main-container-sideBar bg-color"
        >
          <SideBar data={rawData} />
        </Grid>
      </Grid>
    </Box>
  );
}

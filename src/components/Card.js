import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function Variants({ cardValue }) {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 128,
        },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0px 6px", paddingLeft: "2px" }}
        >
          <Paper
            variant="outlined"
            square
            style={{ height: "150px", backgroundColor: "#1976d2 " }}
            className="Paper-style"
          >
            <h2>Cases</h2>
            <h1>+ {cardValue.todayCases}</h1>
            <h4>Total : {cardValue.cases}</h4>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0px 2px", paddingLeft: "2px" }}
        >
          <Paper
            variant="outlined"
            square
            style={{ height: "150px", backgroundColor: "green" }}
            className="Paper-style"
          >
            <h2>Recovered</h2>
            <h1>+ {cardValue.todayRecovered}</h1>
            <h4>Total : {cardValue.recovered}</h4>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0px 6px", paddingRight: "2px" }}
        >
          <Paper
            variant="outlined"
            square
            style={{ height: "150px", backgroundColor: "red" }}
            className="Paper-style"
          >
            <h2 style={{ paddingBottom: "2px", paddingTop: "4px" }}>Deaths</h2>
            <h1 style={{ paddingBottom: "6px", paddingTop: "6px" }}>
              + {cardValue.todayDeaths}
            </h1>
            <h4
              style={{
                marginTop: "auto",
                paddingBottom: "2px",
                paddingTop: "2px",
              }}
            >
              Total : {cardValue.deaths}
            </h4>
            <h4
              style={{
                paddingBottom: "6px",
                paddingTop: "2px",
                color: "silver",
              }}
            >
              23 mon,ocr 2020
            </h4>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

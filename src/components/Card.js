import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import image from "/coronavirus_cdc.jpeg";
export default function Variants() {
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
            <h1>+ 4500.4K</h1>
            <h4>Total : 450.1m</h4>
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
            <h1>+ 4500.4K</h1>
            <h4>Total : 450.1m</h4>
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
            <h2>Deaths</h2>
            <h1>+ 4500.4K</h1>
            <h4>Total : 450.1m</h4>
            {/* <img
              // src={`${process.env.PUBLIC_URL}/img/coronavirus_cdc.jpeg`}
              alt="nanan"
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

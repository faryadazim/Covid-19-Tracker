import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
            <h2>Total Cases</h2>
            <h1>+ 4500 New Cases</h1>
            <h4>45000000</h4>
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
            <h2>Recovered Cases</h2>
            <h1>+ 4500 New Cases</h1>
            <h4>45000000</h4>
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
            <h2>Died Cases</h2>
            <h1>+ 4500 New Cases</h1>
            <h4>45000000</h4>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

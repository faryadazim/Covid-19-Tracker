import React, { useState } from "react";
// import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell
          component="th"
          scope="row"
          onClick={() => setOpen(!open)}
          style={{ padding: "12px 12px", color: "white" }}
        >
          {row.name}
        </TableCell>
        <TableCell
          align="right"
          style={{ padding: "12px 12px", color: "white" }}
        >
          {row.class}
        </TableCell>
        <TableCell
          align="right"
          style={{ padding: "12px 12px", color: "white" }}
        >
          {row.cases}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table
                size="small"
                aria-label="purchases"
                style={{ backgroundColor: "white ", borderRadius: "4px" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Active </TableCell>
                    <TableCell>Critical </TableCell>
                    <TableCell align="right">New </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-none"
                    >
                      hello
                    </TableCell>
                    <TableCell className="border-none">23</TableCell>
                    <TableCell align="right" className="border-none">
                      23
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function SideBar() {
  const [row, setrow] = useState([
    { name: "Ali", class: "new", cases: 34 },
    { name: "khan", class: "new", cases: 34 },
  ]);
  return (
    <TableContainer
      // component={Paper}
      className="sliderMain"
      style={{ backgroundColor: "#1976d2" }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ height: 12 }}>
            <TableCell
              className=""
              style={{ padding: "12px 12px", color: "white" }}
            >
              <strong>Countries</strong>
            </TableCell>
            <TableCell
              className=""
              align="right"
              style={{ padding: "12px 12px", color: "white" }}
            >
              <strong>Cases</strong>
            </TableCell>
            <TableCell
              className=""
              align="right"
              style={{ padding: "12px 12px", color: "white" }}
            >
              <strong>Recovered</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((item, index) => (
            <Row key={index} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

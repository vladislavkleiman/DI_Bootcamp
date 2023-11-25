import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const MainStatictic = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 1600, float: "right", marginRight: 5, marginTop: 3 }}
    >
      <Table aria-label="customized table">
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Gross Profit
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Average Daily Return, $
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Avg profit
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Profit factor
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Winrate
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Total trades
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ height: "85vh", border: "1px solid black" }}
            >
              All trades
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainStatictic;

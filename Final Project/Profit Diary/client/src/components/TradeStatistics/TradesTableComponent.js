import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TradeTable = ({ trades }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // Aligns to the start of the flex container
        alignItems: "center",
        marginTop: "50px",
        marginLeft: "-700px", // Adds some space from the left edge
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: 500, float: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Trade Date</TableCell>
              <TableCell align="right">Stock Ticker</TableCell>
              <TableCell align="right">Trade Type</TableCell>
              <TableCell align="right">Profit/Loss</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {trade.date}
                </TableCell>
                <TableCell align="right">{trade.symbol}</TableCell>
                <TableCell align="right">{trade.tradeType}</TableCell>
                <TableCell align="right">${trade.profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TradeTable;

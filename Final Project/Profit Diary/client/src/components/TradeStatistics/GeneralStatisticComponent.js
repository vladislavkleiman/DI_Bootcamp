import React from "react";
import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// Placeholder for the Profitability Chart
const ProfitabilityChart = () => (
  <Paper style={{ padding: "20px", height: "300px" }}>
    <Typography variant="h6">Profitability Chart Placeholder</Typography>
    {/* Implement chart */}
  </Paper>
);

// Placeholder for the Statistics Table
const StatisticsTable = () => (
  <Paper style={{ padding: "20px", marginTop: "15px" }}>
    <Typography variant="h6">Statistics Table Placeholder</Typography>
    {/* Implement statistics table */}
  </Paper>
);

// Placeholder for the List of All Trades
const TradesList = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Stock Ticker</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Profitability (Return $)</TableCell>
          <TableCell>Side</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{/* Map through trades data and render rows */}</TableBody>
    </Table>
  </TableContainer>
);

const GeneralStatisticComponent = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ProfitabilityChart />
          <StatisticsTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <TradesList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GeneralStatisticComponent;

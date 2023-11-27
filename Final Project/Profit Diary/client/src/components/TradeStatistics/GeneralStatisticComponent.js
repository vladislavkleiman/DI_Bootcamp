import React, { useEffect, useState } from "react";
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

import { parseISO, format, addDays } from "date-fns";

const ProfitabilityChart = () => (
  <Paper style={{ padding: "20px", height: "300px" }}>
    <Typography variant="h6">Profitability Chart Placeholder</Typography>
    {/* Implement chart */}
  </Paper>
);

const StatisticsTable = ({ statistics }) => (
  <TableContainer
    component={Paper}
    style={{ padding: "20px", marginTop: "15px" }}
  >
    <Typography variant="h6">Statistics Table</Typography>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Gross Profit</TableCell>
          <TableCell>{statistics.grossProfit}</TableCell>

          <TableCell>Biggest Loss</TableCell>
          <TableCell>
            {statistics.biggestLoss
              ? statistics.biggestLoss.profit_loss
              : "N/A"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Average Daily Return</TableCell>
          <TableCell>{statistics.averageDailyReturn}</TableCell>
          <TableCell>Biggest Profit</TableCell>
          <TableCell>
            {statistics.biggestProfit
              ? statistics.biggestProfit.profit_loss
              : "N/A"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Average Profit</TableCell>
          <TableCell>
            {parseFloat(statistics.averageProfit).toFixed(2)}
          </TableCell>
          <TableCell>Return on Long</TableCell>
          <TableCell>{statistics.returnOnLong}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profit Factor</TableCell>
          <TableCell>{statistics.profitFactor}</TableCell>
          <TableCell>Return on Short</TableCell>
          <TableCell>{statistics.returnOnShort}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Winrate</TableCell>
          <TableCell>{parseFloat(statistics.winrate).toFixed(2)}</TableCell>
          <TableCell>Average Losses</TableCell>
          <TableCell>
            {parseFloat(statistics.averageLosses).toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Trades</TableCell>
          <TableCell>{statistics.totalTrades}</TableCell>
          <TableCell>Average Winners</TableCell>
          <TableCell>
            {parseFloat(statistics.averageWinners).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const TradesList = ({ trades }) => {
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    const adjustedDate = addDays(date, 0);
    return format(adjustedDate, "yyyy-MM-dd");
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: "15px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "40%", flexGrow: 1 }}>
              Trade Date
            </TableCell>
            <TableCell>Execution Time</TableCell>
            <TableCell>Stock Ticker</TableCell>
            <TableCell>Trade Type</TableCell>
            <TableCell>Profit/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade, index) => (
            <TableRow key={index}>
              <TableCell>{formatDate(trade.trade_date)}</TableCell>
              <TableCell>{trade.exectime}</TableCell>
              <TableCell>{trade.stock_ticker}</TableCell>
              <TableCell>{trade.trade_type}</TableCell>
              <TableCell>${trade.profit_loss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const GeneralStatisticComponent = () => {
  const [statistics, setStatistics] = useState({});
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(
      `http://localhost:5000/profitdiary/all-time-user-statistics/user/${userId}/trade-statistics`
    )
      .then((response) => response.json())
      .then((data) => {
        setStatistics(data);
        setTrades(data.trades || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProfitabilityChart />
          <StatisticsTable statistics={statistics} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TradesList trades={trades} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GeneralStatisticComponent;

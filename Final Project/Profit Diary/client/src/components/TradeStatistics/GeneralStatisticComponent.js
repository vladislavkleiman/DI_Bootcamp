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
  TablePagination,
} from "@mui/material";

import { parseISO, format, addDays } from "date-fns";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProfitabilityChart = () => {
  const [profitData, setProfitData] = useState([]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    const adjustedDate = addDays(date, 0);
    return format(adjustedDate, "yyyy-MM-dd");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(
      `http://localhost:5000/profitdiary/chart-profit/user/trades/profit/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Sort and format data
        const formattedData = data
          .map((item) => ({
            ...item,
            date_trade: formatDate(item.date_trade),
          }))
          .sort((a, b) => new Date(a.date_trade) - new Date(b.date_trade));
        setProfitData(formattedData);
      })
      .catch((error) => console.error("Error fetching profit data:", error));
  }, []);

  return (
    <Paper style={{ padding: "20px", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={profitData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date_trade" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="profitloss"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

const StatisticsTable = ({ statistics }) => (
  <TableContainer
    component={Paper}
    style={{ padding: "20px", marginTop: "15px" }}
  >
    <Typography variant="h6">Statistics Table</Typography>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Gross Profit, $:</TableCell>
          <TableCell>{statistics.grossProfit}</TableCell>

          <TableCell>Biggest Loss, $:</TableCell>
          <TableCell>
            {statistics.biggestLoss
              ? statistics.biggestLoss.profit_loss
              : "N/A"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Average Daily Return, $:</TableCell>
          <TableCell>{statistics.averageDailyReturn}</TableCell>
          <TableCell>Biggest Profit, $:</TableCell>
          <TableCell>
            {statistics.biggestProfit
              ? statistics.biggestProfit.profit_loss
              : "N/A"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Average Profit, $:</TableCell>
          <TableCell>
            {parseFloat(statistics.averageProfit).toFixed(2)}
          </TableCell>
          <TableCell>Return on Long, $:</TableCell>
          <TableCell>{statistics.returnOnLong}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profit Factor</TableCell>
          <TableCell>{statistics.profitFactor}</TableCell>
          <TableCell>Return on Short, $:</TableCell>
          <TableCell>{statistics.returnOnShort}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Winrate, %:</TableCell>
          <TableCell>{parseFloat(statistics.winrate).toFixed(2)}</TableCell>
          <TableCell>Average Losses, $:</TableCell>
          <TableCell>
            {parseFloat(statistics.averageLosses).toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Trades</TableCell>
          <TableCell>{statistics.totalTrades}</TableCell>
          <TableCell>Average Winners, $:</TableCell>
          <TableCell>
            {parseFloat(statistics.averageWinners).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const TradesList = ({ trades }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          {trades
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((trade, index) => (
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
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={trades.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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

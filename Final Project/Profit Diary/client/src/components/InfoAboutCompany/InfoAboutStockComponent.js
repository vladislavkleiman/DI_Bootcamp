import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StockHeader = ({ data, quote }) => {
  const formatNumber = (num) => {
    return parseFloat(num).toFixed(2);
  };

  const getFormattedChange = (change) => {
    const changeNum = parseFloat(change);
    const color = changeNum > 0 ? "green" : "red";
    const sign = changeNum > 0 ? "+" : "";
    return (
      <span style={{ color }}>
        {sign}
        {formatNumber(change)}
      </span>
    );
  };

  return (
    <Paper
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        width: "1200px",
        alignItems: "center",
      }}
    >
      <div>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {data.Symbol}
        </Typography>
        <Typography variant="subtitle1">
          {data.Name} · {data.Exchange} · {data.Country} · {data.Sector} ·{" "}
          {data.Industry}
        </Typography>
      </div>
      {quote && (
        <div style={{ textAlign: "right" }}>
          <div>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", display: "inline" }}
            >
              Price: {formatNumber(quote["05. price"])}
            </Typography>
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                {getFormattedChange(quote["09. change"])}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  color:
                    parseFloat(quote["10. change percent"]) > 0
                      ? "green"
                      : "red",
                  fontWeight: "bold",
                }}
              >
                {getFormattedChange(quote["10. change percent"])}%
              </Typography>
            </div>
          </div>
        </div>
      )}
    </Paper>
  );
};

// Stock Chart Component (Placeholder)
const StockChart = () => (
  <Paper style={{ padding: "20px", height: "300px", width: "1200px" }}>
    <Typography variant="h6">Stock Chart Placeholder</Typography>
    {/* Implement chart */}
  </Paper>
);

const StockDetails = ({ data }) => {
  const formatNumber = (num, appendB = false) => {
    const number = parseFloat(num);
    if (appendB) {
      return (number / 1000000000).toFixed(2) + "B";
    }
    return number.toFixed(2);
  };

  return (
    <Paper style={{ padding: "20px", width: "1200px" }}>
      <Typography variant="h6">Stock Details</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Market Cap
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.MarketCapitalization, true)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Ebitda
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.EBITDA, true)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                P/E Ratio
              </TableCell>
              <TableCell align="right">{formatNumber(data.PERatio)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                PEG Ratio
              </TableCell>
              <TableCell align="right">{formatNumber(data.PEGRatio)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Book Value
              </TableCell>
              <TableCell align="right">{data.BookValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Dividend Per Share
              </TableCell>
              <TableCell align="right">{data.DividendPerShare}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Dividend Yield
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.DividendYield)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                EPS
              </TableCell>
              <TableCell align="right">{data.EPS}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Revenue Per Share
              </TableCell>
              <TableCell align="right">{data.RevenuePerShareTTM}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Profit Margin
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.ProfitMargin)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Operating Margin
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.OperatingMarginTTM)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Return On Assets
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.ReturnOnAssetsTTM)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Return On Equity
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.ReturnOnEquityTTM)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Revenue
              </TableCell>

              <TableCell align="right">
                {formatNumber(data.RevenueTTM, true)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Gross Profit
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.GrossProfitTTM, true)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Forward P/E
              </TableCell>
              <TableCell align="right">{data.ForwardPE}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Price To Sales Ratio
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.PriceToSalesRatioTTM)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Price To Book Ratio
              </TableCell>

              <TableCell align="right">
                {formatNumber(data.PriceToBookRatio)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Beta
              </TableCell>
              <TableCell align="right">{data.Beta}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                52 Week High
              </TableCell>
              <TableCell align="right">{data["52WeekHigh"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                52 Week Low
              </TableCell>
              <TableCell align="right">{data["52WeekLow"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                50 Day Moving Average
              </TableCell>
              <TableCell align="right">{data["50DayMovingAverage"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                200 Day Moving Average
              </TableCell>
              <TableCell align="right">{data["200DayMovingAverage"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Shares Outstanding
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.SharesOutstanding, true)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Dividend Date
              </TableCell>
              <TableCell align="right">{data.DividendDate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const RecentNews = () => (
  <Paper style={{ padding: "20px", width: "580px" }}>
    <Typography variant="h6">Recent News Placeholder</Typography>
    {/* Implement news list */}
  </Paper>
);

// Recent Filings Component (Placeholder)
const RecentFilings = () => (
  <Paper style={{ padding: "20px", width: "585px", marginLeft: "30px" }}>
    <Typography variant="h6">Recent Filings Placeholder</Typography>
    {/* Implement filings list */}
  </Paper>
);

const InfoAboutStockComponent = () => {
  const [ticker, setTicker] = useState("");
  const [stockData, setStockData] = useState(null);
  const [stockQuote, setStockQuote] = useState(null);

  const handleInputChange = (event) => {
    setTicker(event.target.value);
  };

  const fetchStockData = async () => {
    if (!ticker) return;

    try {
      const overviewResponse = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=ML3BNOFVO4303ESB`
      );
      const quoteResponse = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=ML3BNOFVO4303ESB`
      );

      if (!overviewResponse.ok || !quoteResponse.ok) {
        throw new Error(
          `Error: ${overviewResponse.status}, ${quoteResponse.status}`
        );
      }

      const overviewData = await overviewResponse.json();
      const quoteData = await quoteResponse.json();

      setStockData(overviewData);
      setStockQuote(quoteData["Global Quote"]);
    } catch (error) {
      console.error("Failed to fetch stock data:", error);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            style={{ marginTop: "20px" }}
            fullWidth
            label="Enter the company ticker"
            variant="outlined"
            value={ticker}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button onClick={fetchStockData}>Search</Button>
        </Grid>
        {stockData && (
          <>
            <Grid item xs={12}>
              <StockHeader data={stockData} quote={stockQuote} />
            </Grid>
            <Grid item xs={12}>
              <StockChart />
            </Grid>
            <Grid item xs={12}>
              <StockDetails data={stockData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecentNews />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecentFilings />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default InfoAboutStockComponent;

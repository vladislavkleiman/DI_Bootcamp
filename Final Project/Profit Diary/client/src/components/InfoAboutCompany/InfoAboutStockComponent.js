import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

// Mock Data Fetching Function
const fetchStockData = (ticker) => {
  // Replace this with actual API call
  return Promise.resolve({
    name: "Agilent Technologies, Inc.",
    ticker: "A",
    price: "140.00",
    change: "+1.50 (+1.08%)",
    // ... other data
  });
};

// Stock Header Component
const StockHeader = ({ data }) => (
  <Paper style={{ padding: "20px", width: "1200px" }}>
    <Typography variant="h4">
      {data.name} ({data.ticker})
    </Typography>
    <Typography variant="h5">Price: {data.price}</Typography>
    <Typography variant="h6">Change: {data.change}</Typography>
    {/* More details */}
  </Paper>
);

// Stock Chart Component (Placeholder)
const StockChart = () => (
  <Paper style={{ padding: "20px", height: "300px", width: "1200px" }}>
    <Typography variant="h6">Stock Chart Placeholder</Typography>
    {/* Implement chart */}
  </Paper>
);

const StockDetails = () => (
  <Paper style={{ padding: "20px", width: "1200px" }}>
    <Typography variant="h6">Stock Details Placeholder</Typography>
    {/* Implement details */}
  </Paper>
);

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
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetchStockData("A").then((data) => setStockData(data));
  }, []);

  if (!stockData) return <div>Loading...</div>;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StockHeader data={stockData} />
        </Grid>
        <Grid item xs={12}>
          <StockChart />
        </Grid>
        <Grid item xs={12}>
          <StockDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentNews />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentFilings />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoAboutStockComponent;

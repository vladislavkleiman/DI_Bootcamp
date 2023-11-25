import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const MainStatictic = () => {
  const [statistics, setStatistics] = useState({});
  const roundToTwo = (num) => {
    const number = parseFloat(num);
    return isNaN(number) ? 0 : number.toFixed(2);
  };

  useEffect(() => {
    const fetchStatistics = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await fetch(
          `http://localhost:5000/profitdiary/user-statistics/user/${userId}/statistics`
        );
        if (response.ok) {
          const data = await response.json();
          setStatistics(data);
        } else {
          console.error("Failed to fetch statistics");
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 1600, float: "right", marginRight: 5, marginTop: 3 }}
    >
      <Table aria-label="customized table">
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Gross Profit, $: {roundToTwo(statistics.grossProfit)}
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Average Daily Return, $:{" "}
              {roundToTwo(statistics.averageDailyReturn)}
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Average profit, $: {roundToTwo(statistics.averageProfit)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Profit factor: {roundToTwo(statistics.profitFactor)}
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Winrate, %: {roundToTwo(statistics.winrate)}
            </TableCell>
            <TableCell sx={{ width: "500px", border: "1px solid black" }}>
              Total trades: {statistics.totalTrades}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ height: "85vh", border: "1px solid black" }}
            ></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainStatictic;

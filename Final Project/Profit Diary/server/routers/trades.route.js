const express = require("express");
const tradesRouter = express.Router();
const {
  loadTradesController,
  duplicateControlController,
} = require("../controllers/tradesController");

tradesRouter.post("/loadTrades", loadTradesController);
tradesRouter.post("/removeDuplicates", duplicateControlController);

module.exports = { tradesRouter };

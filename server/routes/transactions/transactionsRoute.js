const express = require("express");
const {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionsCtrl,
  updateTransactionsCtrl,
} = require("../../controllers/transactions/transactionsCtrl");
const isLogin = require("../../middlewares/isLogin");

const transactionsRoute = express.Router();

//POST/api/v1/transactions
transactionsRoute.post("/", isLogin, createTransactionCtrl);

//GET/api/v1/transactions
transactionsRoute.get("/", getTransactionsCtrl);

//GET/api/v1/transactions/:id
transactionsRoute.get("/:id", getTransactionCtrl);

//DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", deleteTransactionsCtrl);

//PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", updateTransactionsCtrl);

module.exports = transactionsRoute;

const express = require("express");
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");

// usersRoute;
// accountRoute;
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With,content-type, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//middlewares
app.use(express.json()); //pass incoming data
//routes

//users route
app.use("/api/v1/users", usersRoute);

//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);

//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));

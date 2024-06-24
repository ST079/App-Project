// importing
require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/index-route");
const errorMiddleware = require("./middlewares/error-middleware");
const mongoose = require("mongoose");
// variable declaration
const PORT = process.env.PORT;

//db connect
mongoose.connect(process.env.DB).then(() => {
  console.log("Database connected successfully");
});

// uses
app.use(express.json());
app.use(express.static("public"));
app.use(process.env.VERSION, indexRouter);

//middleware
app.use(errorMiddleware);

// listinig to port
app.listen(PORT, () => {
  console.log("Application is running");
});

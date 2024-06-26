const express = require("express");
const app = express();
const indexRouter = require("./routes/index_route");
const errorMiddleware = require("./middlewares/error_middleware");

app.use(express.json());

app.use("/", indexRouter);
app.use(errorMiddleware);

app.listen(8000, () => {
  console.log("Application is running");
});

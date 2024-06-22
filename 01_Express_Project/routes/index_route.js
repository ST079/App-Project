const router = require("express").Router();
const userRouter = require("./user_route");

router.get("/", (req, res) => {
  res.send("hello from indez");
});

router.use("/users", userRouter);

module.exports = router;

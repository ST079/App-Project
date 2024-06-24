const router = require("express").Router();
const bookRouter = require("../modules/books/book-route");
const userRouter = require("../modules/user/uer-route");
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "I am from Index" });
  } catch (error) {
    next(error);
  }
});

router.use("/books", bookRouter);
router.use("/users", userRouter);

module.exports = router;

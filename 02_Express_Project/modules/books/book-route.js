const router = require("express").Router();
const bookController = require("./book-controller");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "I am from book router" });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await bookController.create(data);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  try {
    res.json({ msg: "book modified" });
  } catch (error) {
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({ msg: "book changed" });
  } catch (error) {
    next(error);
  }
});

router.delete("/", (req, res, next) => {
  try {
    res.json({ msg: "book deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

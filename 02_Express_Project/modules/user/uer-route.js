const { json } = require("express");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res, json({ msg: "I am from user" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

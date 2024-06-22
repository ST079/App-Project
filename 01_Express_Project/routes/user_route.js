const { query } = require("express");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    //logic
    res.send("data from user");
  } catch (err) {
    next(err);
  }
});

router.post("/:name", (req, res, next) => {
  try {
    const { name } = req.params;
    //logic
    res.json({ data: `${name} user created` });
  } catch (err) {
    next(err);
  }
});

router.put("/:classid?", (req, res, next) => {
  try {
    const { classid } = req.params;
    //logic
    res.send({ data: `Update data of class ${classid}` });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id?", (req, res, next) => {
  try {
    const { id } = req.params;
    //logic
    res.send({ data: `Update data of Id no ${id}` });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id?", (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id missing");
    //logic
    res.send({ data: `user with ID ${id} deleted` });
  } catch (err) {
    next(err);
  }
});
module.exports = router;

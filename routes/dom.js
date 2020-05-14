const router = require("express").Router();
const Dom = require("../models/Dom");
const mongoose = require("mongoose");
router.get("/get", async (req, res) => {
  const id = "5ebd2987054cee52ea688426";
  const dom = await Dom.findById(id);
  res.json(dom);
});
router.post("/update", async (req, res) => {
  const id = "5ebd2987054cee52ea688426";
  const { string } = req.body;
  const dom = await Dom.findByIdAndUpdate(id, { string }, { new: true });
  res.json(dom);
});

module.exports = router;

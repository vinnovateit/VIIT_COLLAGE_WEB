const router = require("express").Router();
const Dom = require("../models/Dom");
const mongoose = require("mongoose");
router.post("/load", (req, res) => {
  Dom.findById(req.body.id, (err, dom) => {
    res.json(dom);
  });
});
router.post("/update", async (req, res) => {
  const { string, id } = req.body;
  const dom = await Dom.findByIdAndUpdate(id, { string }, { new: true });
  res.json(dom);
});

module.exports = router;

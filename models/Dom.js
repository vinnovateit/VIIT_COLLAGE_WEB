const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const domSchema = Schema(
  {
    string: String,
    url: String,
    name: String,
  },
  { collection: "dom" }
);

module.exports = Dom = mongoose.model("dom", domSchema);

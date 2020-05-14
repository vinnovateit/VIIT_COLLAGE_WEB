const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("config");
app.use(express.json());
const server = require("http").createServer(app);

const db = config.get("mongoURI");
//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));
app.use("/dom", require("./routes/dom"));

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));

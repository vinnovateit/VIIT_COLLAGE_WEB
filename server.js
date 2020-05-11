const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const server = require("http").createServer(app);



const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("config");

const Razorpay = require("razorpay");
const shortid = require("shortid");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//razor pay
const razorpay = new Razorpay({
  key_id: "rzp_test_Bqx6B6JlLxprFZ", //add your razorpay account details
  key_secret: "Ws9osOaOeh3qmrkkAyTmWZKg",
});

app.post("/razorpay", (req, res) => {
  const { amount } = req.body;
  const payment_capture = 1;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: shortid.generate(),
    payment_capture,
  };

  razorpay.orders.create(options).then((result) => {
    console.log(result);
    res.json({
      id: result.id,
      currency: result.currency,
      amount: result.amount,
    });
  });
});
//razor pay

const server = require("http").createServer(app);

const path = require("path");

const db = config.get("mongoURI");

//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));
app.use("/dom", require("./routes/dom"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));

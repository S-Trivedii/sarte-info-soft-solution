const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/", userRouter);

module.exports = app;

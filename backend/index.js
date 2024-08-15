const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1", rootRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

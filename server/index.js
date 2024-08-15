const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const { client, setupDatabase } = require("./db");

const app = express();

setupDatabase().catch((err) => console.error("Error IN DB setup:", err));

app.use(
  cors({
    origin: process.env.URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1", rootRouter);

process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await client.end();
  process.exit();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

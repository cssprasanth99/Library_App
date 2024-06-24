const express = require("express");
const connection = require("./config/db");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const bookRoute = require("./routes/book.route");

dotenv.config();

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on ${PORT} and db is connected`);
  } catch (error) {
    console.log(error);
  }
});

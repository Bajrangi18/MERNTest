const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 5000;
const AuthRoutes = require("./routes/AuthRoutes");
app.use(express.json());
app.use(cors())
dotenv.config();


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
mongoose.connect(
    process.env.DB_CONNECTION,   {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
)

app.use("/api/user", AuthRoutes);
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
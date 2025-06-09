const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");
const dbConfig = require("./config/dbConfig");
require("dotenv").config();

const app = express();

dbConfig.connectDB();

const corsOptions = {
  origin: [
    "https://phone-f-ten.vercel.app",
    "http://localhost:3000",
    "http://45.136.16.207", // Backend lokal
  ],
  methods: ["GET", "POST", "PUT", "DELETE"], // Ruxsat etilgan HTTP metodlar
  credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Yo'nalishlar
app.use("/api", mainRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

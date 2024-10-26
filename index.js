// packages
const express = require("express");
const dotenv = require("dotenv");

// routes
const Check = require("./routes/check.route.js");

// app
const app = express();

// config
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
app.use(Check);

// start app
function start() {
  try {
    const PORT = process.env.PORT || 4100;

    app.listen(PORT, () =>
      console.log(`App has been started at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log("Error starting the server:", err);
  }
}

start();

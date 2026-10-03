const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../frontend/views"));

app.use(express.static(path.join(__dirname, "../../frontend/public")));

const userRoutes = require("./routes/user.routes");

app.use("/", userRoutes);

module.exports = app;
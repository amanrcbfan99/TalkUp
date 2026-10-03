const express = require("express");
const router = express.Router();

const controller = require("../controller/user.controller");

router.get("/register", controller.registerUi);

module.exports = router;
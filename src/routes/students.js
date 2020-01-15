const express = require("express");
const { Student } = require("../models/index.models");
const router = express.Router();

router.get("/", Student.readAll);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ info: "It's working!!!" });
});

module.exports = router;

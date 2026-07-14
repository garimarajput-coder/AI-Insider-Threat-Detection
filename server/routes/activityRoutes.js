const express = require("express");
const router = express.Router();

const activities = require("../data/activities");

router.get("/", (req, res) => {
  res.json(activities);
});

module.exports = router;
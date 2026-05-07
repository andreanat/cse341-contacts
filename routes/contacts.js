const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

router.get("/:id", (req, res) => {
  res.send("Get one contact");
});

module.exports = router;
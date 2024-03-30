const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allurls = await URL.find({});
    return res.render("home", {
      urls: allurls,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});
module.exports = router;

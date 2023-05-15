const express = require("express");
const router = express.Router();
const {
  getCart
} = require("../controller/cartControllers");

router.get("/", getCart);

module.exports = router;

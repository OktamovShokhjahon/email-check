// packages
const { Router } = require("express");

// controllers
const { check } = require("../controllers/check.controller.js");

// router
const router = Router();

// routes
router.post("/check", check);

module.exports = check;

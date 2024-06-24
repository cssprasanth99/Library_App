const express = require("express");

const { getBooks, createBook } = require("../controllers/book.controller");

const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, getBooks);

router.post("/", authMiddleware, adminMiddleware, createBook);

module.exports = router;

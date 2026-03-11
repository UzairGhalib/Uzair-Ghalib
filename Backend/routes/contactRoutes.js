const express = require("express");
const router = express.Router();

const { submitContact } = require("../controllers/ContactController");
const { submitVisit } = require("../controllers/ContactController");
const validateContact = require("../middleware/validateContact");

router.post("/", validateContact, submitContact);
// Optional endpoint to notify when someone visits the portfolio
router.post("/visit", submitVisit);

module.exports = router;
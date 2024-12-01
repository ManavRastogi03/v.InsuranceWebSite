const express = require("express");
const { createPolicy, getAllPolicies } = require("../controllers/policyController");
const router = express.Router();

router.post("/", createPolicy);
router.get("/", getAllPolicies);

module.exports = router;

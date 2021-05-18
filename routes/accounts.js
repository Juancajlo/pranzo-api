const { Router } = require("express");
const { check } = require("express-validator");

const {
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/accounts");

const router = Router();

router.get("/", getAccounts);
router.post("/", createAccount);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

module.exports = router;

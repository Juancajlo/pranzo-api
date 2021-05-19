const { Router } = require("express");

const {
  getAccounts,
  createVenezuelanAccount,
  createAmericanAccount,
  createCompleteAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/accounts");

const router = Router();

router.get("/", getAccounts);
router.post("/", createVenezuelanAccount);
router.post("/", createAmericanAccount);
router.post("/", createCompleteAccount);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

module.exports = router;

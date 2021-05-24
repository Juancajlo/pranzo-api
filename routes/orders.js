const { Router } = require("express");

const { createOrder } = require("../controllers/orders");

const router = Router();

router.post("/", createOrder);

module.exports = router;

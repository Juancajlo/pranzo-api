const { Router } = require("express");

const {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/dishes");

const router = Router();

router.get("/", getDishes);
router.post("/", createDish);
router.put("/:id", updateDish);
router.delete("/:id", deleteDish);

module.exports = router;

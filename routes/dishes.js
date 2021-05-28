const { Router } = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/dishes");

const router = Router();

router.get("/", getDishes);
router.post("/", upload.single("dishPicture"), createDish);
router.put("/:id", updateDish);
router.delete("/:id", deleteDish);

module.exports = router;

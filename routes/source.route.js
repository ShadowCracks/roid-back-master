const express = require("express");
const reviewController = require("../controllers/source/review.source.controller");

const router = express.Router();

router.get("/review/", reviewController.all);
router.get("/review/:review_id", reviewController.list);
router.post("/review/:review_id", reviewController.create);
router.put("/review/:review_id/:id", reviewController.update);
router.delete("/review/:review_id/:id", reviewController.delete);

module.exports = router;

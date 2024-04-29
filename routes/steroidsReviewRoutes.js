const express = require("express");
const steroidsCtrl = require("../controllers/steroidsCtrl");
const steroidsReviewCommentCtrl = require("../controllers/steroidsReviewCommentCtrl");

const router = express.Router();

// Steroids Review Routes

router.get("/steroids_reviews/", steroidsCtrl.all);
router.get("/steroids_reviews/:review_id", steroidsCtrl.list);
router.post("/steroids_reviews/:review_id", steroidsCtrl.create);
router.put("/steroids_reviews/:review_id/:id", steroidsCtrl.update);
router.delete("/steroids_reviews/:review_id/:id", steroidsCtrl.delete);

router.get("/steroids_review_comment/", steroidsReviewCommentCtrl.all);
router.get(
  "/steroids_review_comment/:comment_id",
  steroidsReviewCommentCtrl.list
);
router.post(
  "/steroids_review_comment/:comment_id",
  steroidsReviewCommentCtrl.create
);
router.put(
  "/steroids_review_comment/:comment_id/:id",
  steroidsReviewCommentCtrl.update
);
router.delete(
  "/steroids_review_comment/:comment_id/:id",
  steroidsReviewCommentCtrl.delete
);

module.exports = router;

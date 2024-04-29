const express = require("express");
const reviewController = require("../controllers/steroids/review.steroid.controller");
const reviewCommentController = require("../controllers/steroids/comment.review.steroid.controller");
const talkController = require("../controllers/steroids/talk.steroid.controller");
const cycleController = require("../controllers/steroids/cycle.steroid.controller");

const router = express.Router();

// Steroids Review Routes

router.get("/review/", reviewController.all);
router.get("/review/:review_id", reviewController.list);
router.post("/review/:review_id", reviewController.create);
router.put("/review/:review_id/:id", reviewController.update);
router.delete("/review/:review_id/:id", reviewController.delete);

router.get("/review_comment/", reviewCommentController.all);
router.get("/reviewcomment/:comment_id", reviewCommentController.list);
router.post("/reviewcomment/:comment_id", reviewCommentController.create);
router.put("/reviewcomment/:comment_id/:id", reviewCommentController.update);
router.delete("/reviewcomment/:comment_id/:id", reviewCommentController.delete);

router.get("/talk/", talkController.all);
router.get("/talk/:talk_id", talkController.list);
router.post("/talk/:talk_id", talkController.create);
router.put("/talk/:talk_id/:id", talkController.update);
router.delete("/talk/:talk_id/:id", talkController.delete);

router.get("/cycle/", cycleController.all);
router.get("/cycle/:cycle_id", cycleController.list);
router.post("/cycle/:cycle_id", cycleController.create);
router.put("/cycle/:cycle_id/:id", cycleController.update);
router.delete("/cycle/:cycle_id/:id", cycleController.delete);

module.exports = router;

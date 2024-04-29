const express = require("express");
const forumController = require("../controllers/forum/index.forum.controller");
const answerController = require("../controllers/forum/answer.forum.controller");
const topicController = require("../controllers/forum/topic.forum.controller");

const router = express.Router();

router.get("/topic/", topicController.list);
router.get("/topic/:id", topicController.get);
router.post("/topic/", topicController.create);
router.put("/topic/:id", topicController.update);
router.delete("/topic/:id", topicController.delete);

// Forum

router.get("/", forumController.list);
router.get("/:forum_id", forumController.get);
router.post("/", forumController.create);
router.put("/:forum_id", forumController.update);
router.delete("/:forum_id", forumController.delete);

// ForumAnswer

router.get("/answer/:forum_id", answerController.list);
router.post("/answer/:forum_id", answerController.create);
router.put("/answer/:forum_id/:id", answerController.update);
router.delete("/answer/:forum_id/:id", answerController.delete);

module.exports = router;

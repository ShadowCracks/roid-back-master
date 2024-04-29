const express = require("express");
const newsController = require("../controllers/news/index.news.controller");

const router = express.Router();

// Groups Routes

router.get("/", newsController.all);
router.get("/:news_id", newsController.list);
router.post("/:news_id", newsController.create);
router.put("/:news_id/:id", newsController.update);
router.delete("/:news_id/:id", newsController.delete);

module.exports = router;

const express = require("express");
const groupController = require("../controllers/group/index.group.controller");

const router = express.Router();

// Groups Routes

router.get("/", groupController.all);
router.get("/:group_id", groupController.list);
router.post("/:group_id", groupController.create);
router.put("/:group_id/:id", groupController.update);
router.delete("/:group_id/:id", groupController.delete);

module.exports = router;

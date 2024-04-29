const express = require("express");
const router = express.Router();

const forumRouter = require("./forum.route");
const promotionRouter = require("./promoRoutes");
const reviewRouter = require("./reviewRoutes");
const talkRouter = require("./talkRoutes");
const userRouter = require("./userRoutes");
const oldSourceRouter = require("./sourceRoutes");
const steroidsRouter = require("./steroids.route");
const sourceRouter = require("./source.route");
const groupRouter = require("./group.route");
const newsRouter = require("./news.route");

router.use("/forum", forumRouter);
router.use("/", reviewRouter);
router.use("/", promotionRouter);
router.use("/", talkRouter);
router.use("/", userRouter);
router.use("/", oldSourceRouter);
router.use("/steroids", steroidsRouter);
router.use("/source", sourceRouter);
router.use("/group", groupRouter);
router.use("/news", newsRouter);

module.exports = router;

const express = require('express');
const forumCtrl = require('../controllers/forumCtrl');
const forumAnswerCtrl = require('../controllers/forumAnswerCtrl');

const router = express.Router();

// Forum

router.get('/forums', forumCtrl.list);
router.get('/forums/:forum_id', forumCtrl.get);
router.post('/forums', forumCtrl.create);
router.put('/forums/:forum_id', forumCtrl.update);
router.delete('/forums/:forum_id', forumCtrl.delete);

// ForumAnswer

router.get('/forumAnswers/:forum_id', forumAnswerCtrl.list);
router.post('/forumAnswers/:forum_id', forumAnswerCtrl.create);
router.put('/forumAnswers/:forum_id/:id', forumAnswerCtrl.update);
router.delete('/forumAnswers/:forum_id/:id', forumAnswerCtrl.delete);


module.exports = router;
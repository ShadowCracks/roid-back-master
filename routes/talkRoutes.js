const express = require('express');
const talkCtrl = require('../controllers/talkCtrl');

const router = express.Router();

// Talk routes

router.get('/talks/:topic_id', talkCtrl.list);
router.post('/talks/:topic_id', talkCtrl.create);
router.put('/talks/:topic_id/:id', talkCtrl.update);
router.delete('/talks/:topic_id/:id', talkCtrl.delete);

module.exports = router;
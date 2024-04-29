const express = require('express');
const topicCtrl = require('../controllers/topicCtrl');

const router = express.Router();

// Topic

router.get('/topics/:type', topicCtrl.list);
router.get('/topics/:type/:id', topicCtrl.get);
router.post('/topics/:type', topicCtrl.create);
router.put('/topics/:type/:id', topicCtrl.update);
router.delete('/topics/:type/:id', topicCtrl.delete);

module.exports = router;
const express = require('express');
const reviewCtrl = require('../controllers/reviewCtrl');

const router = express.Router();

// Review Routes

router.get('/reviews/:topic_id', reviewCtrl.list);
router.post('/reviews/:topic_id', reviewCtrl.create);
router.put('/reviews/:topic_id/:id', reviewCtrl.update);
router.delete('/reviews/:topic_id/:id', reviewCtrl.delete);


module.exports = router;
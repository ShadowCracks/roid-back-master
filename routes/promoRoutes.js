const express = require('express');
const promotionCtrl = require('../controllers/promotionCtrl');

const router = express.Router();

// Promotion

router.get('/promotions', promotionCtrl.list);
router.get('/promotions/:id', promotionCtrl.get);
router.post('/promotions', promotionCtrl.create);
router.put('/promotions/:id', promotionCtrl.update);
router.delete('/promotions/:id', promotionCtrl.delete);

module.exports = router;
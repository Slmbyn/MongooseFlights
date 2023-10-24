const express = require('express');
const router = express.Router();

const ticketCtrl = require('../controllers/ticketController');

router.post('/flights/:id', ticketCtrl.create)

module.exports = router;
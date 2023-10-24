const express = require('express');
const router = express.Router();

const arrivalCtrl = require('../controllers/arrivalController')
// const ticketCtrl = require('../controllers/ticketController');



// when 'add info' button is pressed on flight detail page
router.post('/:id', arrivalCtrl.create)
// router.post('/:id/ticket', ticketCtrl.create)

module.exports = router;
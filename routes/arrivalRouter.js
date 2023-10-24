const express = require('express');
const router = express.Router();

const arrivalCtrl = require('../controllers/arrivalController')



// when 'add info' button is pressed on flight detail page
router.post('/:id', arrivalCtrl.create)

module.exports = router;
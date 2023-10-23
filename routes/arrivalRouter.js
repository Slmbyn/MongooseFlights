const express = require('express');
const router = express.Router();

const arrivalCtrl = require('../controllers/arrivalController')

//remember to add this to server.js



// when 'add info' button is pressed on flight detail page
router.post('/flights/:id', arrivalCtrl.create)

module.exports = router;
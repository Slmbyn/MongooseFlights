var express = require('express');
var router = express.Router();


// Because of the path defined on server.js when
// we mounted this index.js router,
// the following start with '/' (nothing, since this is the home page)
// see line 3 in server.js (app.use('/', indexRouter);)



/* GET home page. */
router.get('/', function(req, res, next) {
  // when user goes to the homepage
  // render views/index.ejs (not the index.ejs thats within views/flightsFolder)
  // I guess express would know the difference btwn the two because the path
  // to the other one is different (its: /flights)
  res.render('index', { title: 'Flights' });
});

module.exports = router;

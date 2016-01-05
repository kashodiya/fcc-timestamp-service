var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Service' });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var date = Date.parse(id);
  var answer = {
    unix: null,
    natural: null
  }; 
  if(isNaN(date)){
    if(!isNaN(id)){
      console.log("Is not date:", id);
      answer.unix = id;
      answer.natural = getDate(Number(id));
    }
  }else{
    console.log("Is date:", id);
    answer.unix = date;
    answer.natural = id;
  }
  res.json(answer);
});


function getDate(milli){
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var date = new Date(milli);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return monthNames[monthIndex] + " " + day + ", " + year;
}

module.exports = router;

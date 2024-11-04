var express = require('express');
var router = express.Router();

let userList = [{ name: 'cgp', age: 18 , score: 70}, {name: 'yeye', age: 18 , score: 100}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welecome to school');
});

router.get('/user', function(req, res, next) {
  res.send(userList);
})

router.get('/user/add', function(req, res, next) {
  userList.map(i => i.score += 1);
  res.send(userList);
})

router.get('/user/reduce', function(req, res, next) {
  userList.map(i => i.score -= 1);
  res.send(userList);
})



module.exports = router;

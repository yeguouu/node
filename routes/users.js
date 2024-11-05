var FileDb = require('./FileDb')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welecome to school');
});

// 增
router.get('/user/add', function(req, res, next) {
  var file=new FileDb() 
  const userList = file.add({"name":"cgp","age":18,"score":70});
  console.log(userList);
  res.send("OK");
})
// 删
router.get('/user/delete', function(req, res, next) {
  var file=new FileDb() 
  const userList = file.delete("cgp");
  // res.send(userList);
  console.log(userList);
  res.send("OK");
})
// 改
router.get('/user/edit', function(req, res, next) {
  var file=new FileDb() 
  const userList = file.edit();
  // res.send(userList);
  console.log(userList);
  res.send("OK");
})
// 查
router.get('/user/query', function(req, res, next) {
  var file=new FileDb() 
  const userList = file.query("cgp");
  console.log(userList);
  res.send(userList);
})

module.exports = router;

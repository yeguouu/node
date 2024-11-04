var express = require('express');
var router = express.Router();

const fs=require('fs')
// let userList = [{ name: 'cgp', age: 18 , score: 70}, {name: 'yeye', age: 18 , score: 100}];

const write=(userList)=>{
  try{
      const data = JSON.stringify(userList)
      fs.writeFileSync('../file.txt',data,"utf-8")
  }catch(err){
      console.log(err)
  }
}
const read=()=>{
  try{
      const data=JSON.parse(fs.readFileSync('../file.txt',"utf-8"))
      return data
  }catch(err){
      console.log(err)
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welecome to school');
});

router.get('/user', function(req, res, next) {
  const userList = read();
  res.send(userList);
  write(userList)
})

router.get('/user/add', function(req, res, next) {
  const userList = read();
  userList.map(i => i.score += 1);
  write(userList)
  res.send(userList);
})

router.get('/user/reduce', function(req, res, next) {
  const userList = read();
  userList.map(i => i.score -= 1);
  write(userList)
  res.send(userList);
})


// read()
// write()
module.exports = router;

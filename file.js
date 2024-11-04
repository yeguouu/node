const fs=require('fs')
let userList = [{ name: 'cgp', age: 18 , score: 70}, {name: 'yeye', age: 18 , score: 100}];
const write=()=>{
    try{
        const data = JSON.stringify(userList)
        fs.writeFileSync('./file.txt',data,"utf-8")
    }catch(err){
        console.log(err)
    }
}
const read=()=>{
    try{
        const data=JSON.parse(fs.readFileSync('./file.txt',"utf-8"))
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
// write()
read()

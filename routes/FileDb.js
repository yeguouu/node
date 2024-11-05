const fs=require('fs')

class FileDb {
    add(info){
        try{
            let data=JSON.parse(fs.readFileSync('./file.txt',"utf-8"))
            console.log('read data', data);
            data.push(info)
            data = JSON.stringify(data)
            fs.writeFileSync('./file.txt',data,"utf-8");
            console.log("add",data);
            return data
        }catch(err){
            console.log(err)
        }
    }
    delete(name){
        try{
            let data=JSON.parse(fs.readFileSync('./file.txt',"utf-8"))
            const index=data.findIndex(i=>i.name===name)
            data.splice(index,1)
            data = JSON.stringify(data)
            fs.writeFileSync('./file.txt',data,"utf-8")
            console.log("delete",data);
            return data
        }catch(err){
            console.log(err)
        }
    }
    edit(){
        try{
            let data=JSON.parse(fs.readFileSync('./file.txt',"utf-8"))
            data.map(i=>i.score+=1)
            data = JSON.stringify(data)
            fs.writeFileSync('./file.txt',data,"utf-8")
            console.log("edit",data);
            return data
        }catch(err){
            console.log(err)
        }
    }
    query(name){
        try{
            const data=JSON.parse(fs.readFileSync('./file.txt',"utf-8"))
            const userInfo=data.find(i=>i.name===name)
            console.log("query",userInfo);
            return userInfo
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = FileDb;
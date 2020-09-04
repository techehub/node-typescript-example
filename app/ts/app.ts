import express = require  ('express')

let app : express.Application  =express ()

app.get ('/', function(req : express.Request, res : express.Response){
    res.send("hello world!!!")
})

app.listen(3000 , ()=>{
console.log ("server is running ...")
})
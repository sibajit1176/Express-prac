const express=require('express')
const app=express()
const Port=3000

const addUser=(req,res,next)=>{
    req.user='Guest'
    next()
}


app.get('/welcome',addUser,(req,res)=>{
    res.send(`<h1>Welcome ,${req.user}</h1>`)
})

app.listen(Port,()=>{
 console.log(`app run on ${Port}`);
 
})
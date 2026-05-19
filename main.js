const express=require('express')
const app=express()
const Port=3000

app.use((req,res,next)=>{
    console.log("User logged in");
    next()
})

app.get("/orders",(req,res)=>{
    res.send("Here is the list of all orders.")
})
app.post("/orders",(req,res)=>{
    res.send("A new order has been created.")
})
app.get("/users",(req,res)=>{
    res.send("Here is the list of all users.")
})
app.post("/users",(req,res)=>{
    res.send("A new user has been added.")
})

app.listen(Port,()=>{
 console.log(`Server is running on http://localhost:${Port}`);
 
})
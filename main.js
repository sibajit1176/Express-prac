const express=require('express')
const app=express()
const Port=3000

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
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
app.get("/Wellcome/:userName",(req,res)=>{
    const name=req.params.userName
    const role=req.query.role
    res.send(`Welcome ${name}, your role is ${role}`)
})
app.use((req,res)=>{
    res.status(404).send('<h1>404 - Page Not Found</h1>')
})

app.listen(Port,()=>{
 console.log(`Server is running on http://localhost:${Port}`);
 
})
const express=require('express')
const app=express()
const userRouter=require('./routes/userRoutes')
const orderRouter=require('./routes/orderRoutes')
const dynamicRouter=require('./routes/dynamicRoutes')
const libreryrouter=require('./libreryRoutes/bookRoutes')
const Port=3000

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})
app.use('/orders',orderRouter)
app.use('/users',userRouter)
app.use('/Wellcome',dynamicRouter)
app.use('/books',libreryrouter)

app.use((req,res)=>{
    res.status(404).send('<h1>404 - Page Not Found</h1>')
})

app.listen(Port,()=>{
 console.log(`Server is running on http://localhost:${Port}`);
 
})
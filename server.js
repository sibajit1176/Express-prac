const express = require('express')
const logEntity=require('./models/logEntity')
const productRoute=require('./routes/productRoutes')

const sequelize=require('./models/db')

const port=3000
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h1> Home Page</h1>')
})

app.use('/products',productRoute)
app.use((req,res)=>{
    res.send('<h1>Page not found</h1>')
})
const server=async ()=>{
  try {
    await sequelize.authenticate()
    await sequelize.sync({alter:true})
    console.log("Database connected");
    app.listen(port,()=>{
    console.log(`server run on ${port}`);
    
})
  } catch (error) {
    console.log(error);
  }
}
server()
const express= require('express')

const router= express.Router()

router.get('/:userName',(req,res)=>{
     const name=req.params.userName
    const role=req.query.role
    res.send(`Welcome ${name}, your role is ${role}`)
})

module.exports=router
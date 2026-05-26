const express= require('express')
const { addProduct, getProduct, buyProduct, addProductquantity, UpdateProduct } = require('../controller/productController')
const router=express.Router()


router.post('/addProduct',addProduct)
 router.get('/getProducts',getProduct)
router.post('/buyProducts/:id',buyProduct)
router.post('/addProductquantity/:id',addProductquantity)
 router.post('/updateProduct/:id',UpdateProduct)

module.exports=router
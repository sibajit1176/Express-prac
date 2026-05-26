const { Sequelize, where } = require('sequelize')
const logEntity = require('../models/logEntity')

const addProduct = async (req, res) => {
    try {
        const { itemname, description, price, totalquantity } = req.body
        const addData = await logEntity.create({
            itemname: itemname,
            description: description,
            price: price,
            totalquantity: totalquantity
        })
        await addData.save()
        res.status(200).send({
            message: `${addData.itemname} successfully added`,
            res: addData
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: `addproduct error for ${error}`,
        })
    }
}
const getProduct = async (req, res) => {
    try {
        const getData = await logEntity.findAll({
            attributes: [
                'id',
                'itemname',
                'description',
                'price',
                [
                    Sequelize.literal('totalquantity - totalSalequantity'),
                    'availableProduct'
                ]
            ]
        })
        res.status(200).send({
            message: `All data fetch successfully`,
            res: getData
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: `getproduct error for ${error}`,
        })
    }
}
const buyProduct = async (req, res) => {
    try {
        const { id } = req.params
        const quantity = Number(req.query.quantity)
        const getData = await logEntity.findOne({
            where: {
                id: id
            }
        })
        if (!getData) {
            return res.status(404).send({
                message: 'Product not found'
            });
        }
        const availableProduct =
            getData.totalquantity - getData.totalSalequantity;

        if (availableProduct <= 0) {
            return res.status(200).send({
                message: 'Product not Available',
            });
        }

        if (quantity > availableProduct) {
            return res.status(200).send({
                message: `Only ${availableProduct} products available`
            });
        }
        const updateddata = await logEntity.update({
            totalSalequantity: getData.totalSalequantity + quantity
        }, {
            where: {
                id: id
            }
        })
        res.status(200).send({
            message: `${quantity} ${getData.itemname} buy successfully`,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: `buyproduct error for ${error}`,
        })
    }
}
const addProductquantity = async (req, res) => {
    try {
        const { id } = req.params
        const quantity = Number(req.query.quantity)
        const getData = await logEntity.findOne({
            where: {
                id: id
            }
        })
        if (!getData) {
            return res.status(404).send({
                message: 'Product not found'
            });
        }

        const updateddata = await logEntity.update({
            totalquantity: getData.totalquantity + quantity
        }, {
            where: {
                id: id
            }
        })
        res.status(200).send({
            message: `${quantity} ${getData.itemname} add successfully`,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: `addproduct error for ${error}`,
        })
    }
}
const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const getData = await logEntity.findOne({
            where: {
                id: id
            }
        })
        if (!getData) {
            return res.status(404).send({
                message: 'Product not found'
            });
        }
        const { itemname, description, price, totalquantity } = req.body
        const updateData = await logEntity.update({
            itemname: itemname??getData.itemname,
            description: description?? getData.description,
            price: price??getData.price,
            totalquantity: totalquantity??getData.totalquantity
        },{
            where:{
                id:id
            }
        })
        res.status(200).send({
            message: `${getData.itemname} successfully updated`
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: `update product error for ${error}`,
        })
    }
}

module.exports = {
    addProduct,
    getProduct,
    buyProduct,
    addProductquantity,
    UpdateProduct
}
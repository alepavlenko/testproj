const Products = require('../models/Products')
const errorHandler = require('../utils/errorHandler')

module.exports.getByWarehousesId = async function (req,res) {
    try {
        const product = await Products.find({
            warehouse: req.params.warehouseId,
            user: req.user.id
        })
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async function (req,res) {
    try {
        const product = await new Products({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            itemNumber: req.body.itemNumber,
            purchasing: req.body.purchasing,
            shipment: req.body.shipment,
            warehouse: req.params.warehouseId,
            user: req.user.id
        }).save()
        res.status(201).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async function (req,res) {
    try {
        await Products.remove({_id: req.params.id})
        res.status(200).json({
            message: 'has been delete.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function (req,res) {
    try {
        const product = await Products.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {warehouse: req.params.warehouseId}},
            {new: true}
        )
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}

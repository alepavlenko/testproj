const Warehouses = require('../models/Warehouses')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req,res) {
    try {
        const categories = await Warehouses.find({user: req.user.id})
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getById = async function (req,res) {
    try {
        const category = await Warehouses.findById(req.params.id)
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async function (req,res) {
    try {
        await Warehouses.remove({_id:req.params.id})
        res.status(200).json({
            message: 'Category has been delete.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async  function (req,res) {
    try {
        const category =  await new Warehouses({
            name: req.body.name,
            numberProduct: +req.body.numberProduct,
            length: +req.body.length,
            width: +req.body.width,
            height: +req.body.height,
            user: req.user.id,
        }).save()
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
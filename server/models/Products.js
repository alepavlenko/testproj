const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    itemNumber:{
        type: Number,
        required: true
    },
    purchasing:{
        type: String,
        required: true
    },
    shipment:{
        type: String,
        required: true
    },
    warehouse: {
        ref: 'warehouses',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('products ', productSchema)
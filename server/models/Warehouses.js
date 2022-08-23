const mongoose = require('mongoose')
const Schema = mongoose.Schema

const warehousesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberProduct: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('warehouses', warehousesSchema)
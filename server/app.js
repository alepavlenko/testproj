const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParer = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/warehouses')
const positionRoutes = require('./routes/products')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MD connected!'))
    .catch((error) => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(bodyParer.urlencoded({extended: true}))
app.use(bodyParer.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/warehouses', categoryRoutes)
app.use('/api/products', positionRoutes)

module.exports = app
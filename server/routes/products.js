const express = require('express')
const controller = require('../controllers/products')
const passport = require("passport");
const router = express.Router()


router.get('/:warehouseId',  passport.authenticate('jwt', {session: false}) , controller.getByWarehousesId)
router.post('/:warehouseId',  passport.authenticate('jwt', {session: false}) , controller.create)
router.patch('/:id/:warehouseId',  passport.authenticate('jwt', {session: false}) , controller.update)
router.delete('/:id',  passport.authenticate('jwt', {session: false}) , controller.remove)


module.exports = router
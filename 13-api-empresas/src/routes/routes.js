const express = require ('express')
const router =  express.Router()

const CargoController = require ('../controllers/CargoController')
const funcionarioController = require('../controllers/FuncionarioController')

// cargos
router.post('/cargos', CargoController.create)
router.get('/cargos' , CargoController.getAll)
router.get('/cargos/:id' , CargoController.getbyId)
router.put('/cargos/:id' , CargoController.update)
router.put('/cargos/:id' , CargoController.remove)



router.post('/funcionarios', funcionarioController.create)

module.exports = router


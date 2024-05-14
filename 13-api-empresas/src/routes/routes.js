const express = require ('express')
const router =  express.Router()


// controladores
const CargoController = require ('../controllers/CargoController')
const funcionarioController = require('../controllers/FuncionarioController')

// validadores
const {ValidarId} = require('../validators/idValidator')
const {cargoValidador} = require('../validators/CargoValidator')

// cargos
router.post('/cargos',cargoValidador,CargoController.create)
router.get('/cargos' , CargoController.getAll)
router.get('/cargos/:id' , ValidarId, CargoController.getbyId)
router.put('/cargos/:id' , ValidarId,CargoController.update)
router.put('/cargos/:id' , ValidarId,CargoController.remove)


// Funcionarios
router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', funcionarioController.getAll)
router.get('/funcionarios/:id', funcionarioController.getById)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', funcionarioController.remove)

module.exports = router


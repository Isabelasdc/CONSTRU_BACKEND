const express = require ('express')
const router =  express.Router()


// controladores
const CargoController = require ('../controllers/CargoController')
const funcionarioController = require('../controllers/FuncionarioController')
const DepartamentoController = require('../controllers/DepartamentoController')

// validadores
const {ValidarId} = require('../validators/idValidator')
const {cargoValidador} = require('../validators/CargoValidator')

// cargos
router.post('/cargos',cargoValidador,CargoController.create)
router.get('/cargos' , CargoController.getAll)
router.get('/cargos/:id' , ValidarId, CargoController.getbyId)
router.put('/cargos/:id' , ValidarId,CargoController.update)
router.delete('/cargos/:id' , ValidarId,CargoController.remove)


// Funcionarios
router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios', funcionarioController.getAll)
router.get('/funcionarios/:id', funcionarioController.getById)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', funcionarioController.remove)

// Departamento 
router.post('/departamentos', DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', DepartamentoController.getbyId)
router.put('/departamentos/:id', DepartamentoController.update)
router.delete('/departamentos/:id', DepartamentoController.remove)


module.exports = router


const express = require ('express')
const router =  express.Router()


// controladores
const CargoController = require ('../controllers/CargoController')
const funcionarioController = require('../controllers/FuncionarioController')
const DepartamentoController = require('../controllers/DepartamentoController')

// validadores
const {ValidarId} = require('../validators/idValidator')
const {cargoValidador} = require('../validators/CargoValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')

// cargos
router.post('/cargos',cargoValidador,CargoController.create)
router.get('/cargos' , CargoController.getAll)
router.get('/cargos/:id' , ValidarId, CargoController.getbyId)
router.put('/cargos/:id' , ValidarId,CargoController.update)
router.delete('/cargos/:id' , ValidarId,CargoController.remove)


// Funcionarios
router.post('/funcionarios',funcionarioValidador,funcionarioController.create)
router.get('/funcionarios', funcionarioController.getAll)
router.get('/funcionarios/:id', funcionarioController.getbyId)
router.put('/funcionarios/:id', funcionarioController.update)
router.delete('/funcionarios/:id', funcionarioController.remove)

// Departamento 
router.post('/departamentos', DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', ValidarId,DepartamentoController.getbyId)
router.put('/departamentos/:id',ValidarId,DepartamentoController.update)
router.delete('/departamentos/:id', ValidarId,DepartamentoController.remove)


module.exports = router


const express = require ('express')
const router =  express.Router()


// controladores
const CargoController = require ('../controllers/CargoController')
const funcionarioController = require('../controllers/FuncionarioController')
const DepartamentoController = require('../controllers/DepartamentoController')
const TarefaController = require('../controllers/TarefaController')
const ProjetoController = require('../controllers/ProjetoController')

// validadores
const {ValidarId} = require('../validators/idValidator')
const {cargoValidador} = require('../validators/CargoValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')
const { departamentoValidador } = require('../validators/DepartamentoValidator')
const { tarefaValidador } = require('../validators/TarefaValidator')
const { projetoValidador } = require('../validators/ProjetoValidator')
const {checarToken} = require('../validators/AutenticacaoValidator')

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
router.post('/departamentos',departamentoValidador ,DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', ValidarId,DepartamentoController.getbyId)
router.put('/departamentos/:id',ValidarId,DepartamentoController.update)
router.delete('/departamentos/:id', ValidarId,DepartamentoController.remove)

// tarefas 
router.post('/tarefas', tarefaValidador, TarefaController.create)
router.get('/tarefas', TarefaController.getAll)
router.get('/tarefas/:id', ValidarId,TarefaController.getbyId)
router.put('/tarefas/:id',ValidarId,TarefaController.update)
router.delete('/tarefas/:id', ValidarId,TarefaController.remove)

// projeto 
router.post('/projetos',projetoValidador, ProjetoController.create)
router.get('/projetos', ProjetoController.getAll)
router.get('/projetos/:id', ValidarId,ProjetoController.getbyId)
router.put('/projetos/:id',ValidarId,ProjetoController.update)
router.delete('/projetos/:id', ValidarId,ProjetoController.remove)


module.exports = router


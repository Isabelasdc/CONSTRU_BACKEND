const express = require ('express')
const router =  express.Router()


// controladores
const AgendamentoController = require ('../controllers/AgendamentoController')
const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const PagamentoController = require('../controllers/PagamentoController')
const ServicoController = require('../controllers/ServicoController')
const Agendamento2Controller = require('../controllers/AgendamentoController')

// validadores
const {ValidarId} = require('../validators/idValidator')
const {clienteValidador} = require('../validators/ClienteValidator')
const {agendamentoValidador} = require('../validators/AgendamentoValidator')
const {funcionarioValidador} = require('../validators/FuncionarioValidator')
const {pagamentoValidador} = require('../validators/PagamentoValidator')
const {servicoValidador} = require('../validators/ServicoValidator')
const {checarToken} = require('../validators/AutenticacaoValidator')


// agendamento
router.post('/agendamento', AgendamentoController.create)
router.get('/agendamento' , AgendamentoController.getAll)
router.get('/agendamento/:id' , ValidarId, AgendamentoController.getbyId)
router.put('/agendamento/:id' , ValidarId,AgendamentoController.update)
router.delete('/agendamento/:id' , ValidarId,AgendamentoController.remove)


// cliente
router.post('/cliente',clienteValidador,ClienteController.create)
router.get('/cliente', ClienteController.getAll)
router.get('/cliente/:id', ClienteController.getbyId)
router.put('/cliente/:id', ClienteController.update)
router.delete('/cliente/:id', ClienteController.remove)

// funcionario
router.post('/funcionario',funcionarioValidador ,FuncionarioController.create)
router.get('/funcionario',FuncionarioController.getAll)
router.get('/funcionario/:id', ValidarId,FuncionarioController.getbyId)
router.put('/funcionario/:id',ValidarId,FuncionarioController.update)
router.delete('/funcionarios/:id', ValidarId,FuncionarioController.remove)

// pagamento
router.post('/pagamento', pagamentoValidador, PagamentoController.create)
router.get('/pagamento', PagamentoController.getAll)
router.get('/pagamento/:id', ValidarId,PagamentoController.getbyId)
router.put('/pagamento/:id',ValidarId,PagamentoController.update)
router.delete('/pagamento/:id', ValidarId,PagamentoController.remove)

// serviço
router.post('/servico',servicoValidador, ServicoController.create)
router.get('/servico', ServicoController.getAll)
router.get('/servico/:id', ValidarId,ServicoController.getbyId)
router.put('/servico/:id',ValidarId,ServicoController.update)
router.delete('/servico/:id', ValidarId,ServicoController.remove)


module.exports = router


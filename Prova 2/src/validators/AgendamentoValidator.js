const yup = require('yup')

const Schema = yup.object().shape({
    cliente: yup
    .string('campo precisar ser um texto'),
    funcionario: yup
    .string('campo precisar ser um texto'),
    servico: yup 
    .string('campo precisar ser um texto'),
    data: yup
    .date('Data inválida')
    .required ('campo obrigatório'), 
    hora: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    observacoes: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    statusAgendamento : yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    pagamento : yup
    .string('campo precisar ser um texto'),
})

function agendamentoValidador(req, res, next){
    Schema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
        const errors = err.inner.map(e =>{
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })

     res.status(400).json(
         {
            mensagem: "Falha na validação dos campos",
            erros: errors

         }
     ) 
    
    })

}


module.exports = {
    agendamentoValidador
}
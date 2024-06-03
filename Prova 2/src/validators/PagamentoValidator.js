const yup = require('yup')

const Schema = yup.object().shape({
    agendamento: yup
    .string('campo precisar ser um texto'),
    valor: yup
    .number('campo precisa ser um número')
    .required('campo obrigatório'),
    dataPagamento: yup
    .date('Data inválida')
    .required ('campo obrigatório'),  
    metodoPagamento: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'), 
    statusPagamento: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'), 
})

function pagamentoValidador(req, res, next){
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
    pagamentoValidador
}
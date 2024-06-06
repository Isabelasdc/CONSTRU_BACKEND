const yup = require('yup')

const Schema = yup.object().shape({
    nome:  yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    cpf: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    telefone: yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'), 
})

function clienteValidador(req, res, next){
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
    clienteValidador
}
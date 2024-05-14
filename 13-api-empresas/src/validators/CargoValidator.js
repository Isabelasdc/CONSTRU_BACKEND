const yup = require('yup')

const cargoSchema = yup.object().shape({
    nome:  yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    descricao: yup
    .string(),
    salario: yup.number('campo precisa ser um número')
    .min(1412, 'precisa ser maior que o salário minimo')
    .required('campo obrigatório')
})

function cargoValidador(req, res, next){
    cargoSchema
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
    cargoValidador
}
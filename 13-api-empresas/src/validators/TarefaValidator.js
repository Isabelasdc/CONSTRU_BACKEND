const yup = require('yup')

const tarefaSchema = yup.object().shape({
    titulo:  yup
    .string('campo precisar ser um texto')
    .required ('campo obrigatório'),
    descricao: yup
    .string(),
    dataInicio: yup
    .date('Data inválida')
    .required ('campo obrigatório'),
    dataFim: yup
    .date('Data inválida')
    .required ('campo obrigatório'),
    funcionario : yup
    .string('campo precisar ser um texto'),
    projeto: yup
    .string('campo precisar ser um texto'),
})

function tarefaValidador(req, res, next){
    tarefaSchemaSchema
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
    tarefaValidador
}
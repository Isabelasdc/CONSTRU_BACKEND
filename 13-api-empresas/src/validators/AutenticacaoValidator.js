const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('campo precisar ser um texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisar ser um texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório')
})

const loginSchema = yup.object().shape({
    email: yup
        .string('campo precisar ser um texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório')
})


function usuarioValidador(req, res, next) {
    usuarioSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
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

function loginValidador(req, res, next) {
    loginSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
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
async function checarToken(req, res, next){
    try{
    const autorizationHeader = req.get('Authorization')
    const separator = autorizationHeader.split(' ')
    const token = separator[1]


        jwt.verify(token, JWT_SECRET)
        next()
    }catch (error){
        return res.status(401).json({mensagem: "token inválido"})
    }
}


module.exports = {
    usuarioValidador,
    loginValidador,
    checarToken
}
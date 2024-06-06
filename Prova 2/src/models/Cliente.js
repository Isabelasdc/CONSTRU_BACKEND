const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {

        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: false
        },
        telefone: {
            type: String,
            required: false
        },
        endereco: {
            cep: String,
            longradouro : String,
            complemento: String,
            bairro : String,
            localidade: String,
            uf: String,
            numero : String,

        },
    },
    {
        timestamps: true
    }

)

const Cliente = mongoose.model('cliente', schema)
module.exports = Cliente
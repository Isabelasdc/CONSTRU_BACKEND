const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {

        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true

        },
        telefone: {
            type: String,
            required: true

        },
        dataContratacao: {
            type: Date,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        genero: {
            type: String,
            required: true

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
        email: {
            type: String,
            required: true,
        },
        cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        },
        departamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: false
        }
        

    },
    {
        timestamps: true
    }
)

const Funcionario = mongoose.model('funcionário', schema)
module.exports = Funcionario
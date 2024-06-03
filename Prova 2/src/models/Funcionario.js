const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {

        nome: {
            type: String,
            required: true
        },
        funcao: {
            type: String,
            required: false
        },
        salario: {
            type: Number,
            required: true
        },
        dataContratacao: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true
    }

)

const Funcionario = mongoose.model('funcionario', schema)
module.exports = Funcionario
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {

        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false
        },
        funcionario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: false
        },
        servico: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'servico', 
            required: false
        },
        data: {
            type: Date,
            required: true
        },
        hora: {
            type: String,
            required: true
        },
        observacoes: {
            type: String,
            required: true
        },
        statusAgendamento: {
            type: String,
            required: true
        },
        pagamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'pagamento',
            required: false
        },
    },
    {
        timestamps: true
    }

)

const Agendamento = mongoose.model('agendamento', schema)
module.exports = Agendamento
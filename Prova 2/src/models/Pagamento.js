const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {

        agendamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'agendamento',
            required: false
        },
        valor: {
            type: Number,
            required: false
        },
        dataPagamento: {
            type: Date,
            required: true
        },
        metodoPagamento: {
            type: String,
            required: true
        },
        statusPagamento: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }

)

const Pagamento = mongoose.model('pagamento', schema)
module.exports = Pagamento
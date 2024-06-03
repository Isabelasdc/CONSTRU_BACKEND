const Agendamento = require('../models/Agendamento')
const nodemailer = require('nodemailer');
const Cliente = require('../models/Cliente')



async function create(req, res) {
    try {
        const { email } = req.body;

        // Busca o cliente com o email fornecido
        const cliente = await Cliente.findOne({ email });

        if (!cliente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado!" });
        }

        // Cria um novo agendamento
        const agendamento = new Agendamento(req.body);
        const agendamentoCriado = await agendamento.save();

        // Configuração do transporter
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.msn.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Envia o email para o cliente
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Bem-vindo",
            text: "Olá, seu agendamento foi realizado com sucesso"
        });

        res.status(201).json(agendamentoCriado);
    } catch (error) {
        console.error("Erro ao criar agendamento: ", error);
        res.status(400).json({
            mensagem: "Erro ao criar agendamento!",
            erro: error.message
        });
    }
}


async function getAll(req, res) {
    res.json(await Agendamento.find())
}

async function getbyId(req, res) {
    const agendamento = await Agendamento.findById(req.params.id)
    if (agendamento) {
        res.json(agendamento)
    } else {
        res.status(404).json({ mensagem: "Agendamento não encontrado!" })
    }

}

async function update(req, res) {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, req.body)
    if (agendamentoAtualizado) {
        res.json(agendamentoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Agendamento não encontrado" })
    }

}

async function remove(req, res) {
    const agendamentoExcluido = await Agendamento.findByIdAndDelete(req.params.id)
    if (agendamentoExcluido) {
        res.json({
            mensagem: "Agendamento excluido com sucesso!",
            agendamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Agendamento não encontrato!" })
    }
}



module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}
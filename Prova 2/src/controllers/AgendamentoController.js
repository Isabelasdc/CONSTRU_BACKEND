const Agendamento = require('../models/Agendamento')
const nodemailer = require('nodemailer')

async function create(req, res) {
    const { email, agendamento, funcionario, servico, data, hora, observacoes, statusAgendamento, pagamento } = req.body


    try {
        
        const novoagendamento = new Agendamento({  email, agendamento, funcionario, servico, data, hora, observacoes, statusAgendamento,pagamento })
        const agendamentoSalvo = await novoagendamento.save()

        
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, 
            subject: "Agendado com sucesso!",
            text: "Olá, agradecemos a sua preferência em nossos serviços, seu horário foi marcado e te aguardamos ansiosamente."
        });

        
        res.status(201).json({ mensagem: "Agendado com sucesso!", agendado: agendamentoSalvo })
    } 
    
    catch (error) {
        console.error('Erro ao enviar email!', error)
        res.status(500).json({ mensagem: "Erro ao cadastrar usuário e enviar email de agendamento" })
    }
}

async function getAll(req, res) {
    res.json(await Agendamento.find())
}

 async function getbyId(req, res) {
    const agendamento = await Agendamento.findById(req.params.id)
    if(agendamento){
        res.json(agendamento)
    } else {
        res.status(404).json({mensagem: "agendamento não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, req.body)
   if(agendamentoAtualizado) {
    res.json(agendamentoAtualizado)
    } else {
        res.status(404).json({mensagem: "agendamento não encontrado"})
    }

}

async function remove(req, res) {
    const agendamentoExcluido = await Agendamento.findByIdAndDelete(req.params.id)
    if (agendamentoExcluido) {
        res.json({
            mensagem: "agendamento excluido com sucesso!",
            agendamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "agendamento não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}
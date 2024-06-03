const mongoose = require ('mongoose')


mongoose.Types.ObjectId.isValid()

function ValidarId(req, res, next) {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValid){
        next()
    } else {
        res.status(400).json({mensagem: "id inválido"})
    }
    
}


module.exports = {
    ValidarId
}
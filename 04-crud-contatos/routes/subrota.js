// importa o modulo do express
const express = require ('express')
// criando um router
const router = express.Router()


router.get('/subrota', (req, res) => {
    res.send("subrota GET")

})

router.post('/subrota', (req, res) => {
    res.send("subrota POST")

})
router.put('/subrota', (req, res) => {
    res.send("subrota PUT")

})
router.delete('/subrota', (req, res) => {
    res.send("subrota DELETE")

})

//exporta o router
module.exports = router

// este router tbm é um middleware

const express = require('express');
const router = express.Router();

let listaLivros = [
    {
        id: 1,
        titulo: "Guerra e Paz",
        editora: "Leitura",
        ano: "2002",
        autor: "João",
        preco: 18.99
    },
    {
        id: 2,
        titulo: "Amor e Trovão",
        editora:  "Marvel Comics",
        ano: "2008",
        autor: "Pedro",
        preco: 38.99
    }
];

// Rota para buscar todos os livros
router.get('/livros', (req, res) => {
    res.json(listaLivros);
});



// buscar por id
router.get('/livros/:id', (req, res) => {
    const id = req.params.id
    const livro = listaLivros.find(livro => livro.id == id)
    if(livro){
        return res.json(livro)
    } 
    return res.status(404).json({mensagem: " NOT_FOUND "})
})

//  cadastrar carro
router.post('/livros', (req, res) => {
    const corpo = req.body
    console.log(dados)
    // if(!corpo.titulo|| !corpo.editora || !corpo.ano|| !corpo.preco){
    //     return res.status(400).json({mensagem: " BAD_REQUEST"})
    // }

    // const livro = {
    //     id: Math.round(Math.random() * 1000),
    //     titulo: corpo.titulo,
    //     editora: corpo.editora,
    //     ano: corpo.ano,
    //     preco: corpo.preco
    // }

        listaLivros.push(livro)
        return res.status(201).json({mensagem: "Livro cadastrado com sucesso", livro

      })

})
// atualizar carro
router.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if(!corpo.titulo|| !corpo.editora || !corpo.ano|| !corpo.preco){
        return res.status(400).json({mensagem: "  BAD_REQUEST"})
    }

    const index = listaLivros.findIndex(livro => livro.id == id)
    if (index == -1){
        return res.status(404).json({mensagem: "NOT_FOUND "})
    }
    const livroAtualizado = {
        id: Number(id),
        titulo: corpo.titulo,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
    }

    listaLivros[index] = livroAtualizado

    return res.json({mensagem: "Livro atualizado com sucesso" , livroAtualizado})

})

// deletar carro
router.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    const index = listaLivros.findIndex(livro => livro.id == id)
    if(index == -1 ){
        return res.status(404).json({
            mensagem: "NOT_FOUND"
        })   
     }
     listaLivros.splice(index , 1)
     res.json({mensagem: "livro excluido com sucesso!"})

})


// filtrar por autor
router.get('/livros/autor/:autor', (req, res) => {
    const autor = req.params.autor
    const livroPorAutor = listaLivros.filter(livro => livro.autor.toUpperCase() == autor.toUpperCase())
    res.json(livroPorAutor)
})



// busca o valor total de todos os livros
router.get('/livros/preco/media', (req, res) => { 
    const corpo = req.body;
    
                                      
   
    let soma = 0
    listaLivros.forEach(livro=> {
        soma = soma + livro.preco
    })

    const media = soma / listaLivros.length


    const resultado = {
        precoMedia: media,
    };
    
    res.json(resultado);
});

module.exports = router
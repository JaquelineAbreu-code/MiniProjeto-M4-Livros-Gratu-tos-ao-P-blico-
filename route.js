const { livrosClassicos ,livrosDidaticos , livrosEnem, livrosCordel, livrosinfantis} = require('./banco');

const express = require('express');

const router = express.Router();

router.get('/livros-classicos', (req, res) => {
res.json(livrosClassicos)
});

router.get('/livros-didaticos',(req, res) => {
res.json(livrosDidaticos)
})

router.get('/livros-enem',(req, res) => {
res.json(livrosEnem)
})

router.get('/livros-cordel',(req, res) => {
res.json(livrosCordel)
})

router.get('/livros-infantis',(req, res) => {
res.json(livrosinfantis)
})

module.exports = router;
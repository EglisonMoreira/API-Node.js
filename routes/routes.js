const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const viagemController = require('../controllers/viagemController');

// Rotas para Cliente
router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.obterCliente);
router.post('/clientes', clienteController.criarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);

// Rotas para Viagem
router.get('/viagens', viagemController.listarViagens);
router.get('/viagens/:id', viagemController.obterViagem);
router.post('/viagens', viagemController.criarViagem);
router.put('/viagens/:id', viagemController.atualizarViagem);
router.delete('/viagens/:id', viagemController.deletarViagem);

router.get('/ola', (req, res)=> {
    res.send("Ola")
})

module.exports = router;

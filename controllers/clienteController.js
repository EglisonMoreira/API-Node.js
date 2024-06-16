const Cliente = require('../models/cliente');

exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.criarCliente = async (req, res) => {
    const { nome, email } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, email });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        cliente.nome = nome;
        cliente.email = email;
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.destroy();
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

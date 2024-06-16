const Viagem = require('../models/viagem');

exports.listarViagens = async (req, res) => {
    try {
        const viagens = await Viagem.findAll();
        res.json(viagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterViagem = async (req, res) => {
    const { id } = req.params;
    try {
        const viagem = await Viagem.findByPk(id);
        if (!viagem) {
            return res.status(404).json({ message: 'Viagem não encontrada' });
        }
        res.json(viagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.criarViagem = async (req, res) => {
    const { destino, data, clienteId } = req.body;
    try {
        const novaViagem = await Viagem.create({ destino, data, clienteId });
        res.status(201).json(novaViagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarViagem = async (req, res) => {
    const { id } = req.params;
    const { destino, data, clienteId } = req.body;
    try {
        const viagem = await Viagem.findByPk(id);
        if (!viagem) {
            return res.status(404).json({ message: 'Viagem não encontrada' });
        }
        viagem.destino = destino;
        viagem.data = data;
        viagem.clienteId = clienteId;
        await viagem.save();
        res.json(viagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarViagem = async (req, res) => {
    const { id } = req.params;
    try {
        const viagem = await Viagem.findByPk(id);
        if (!viagem) {
            return res.status(404).json({ message: 'Viagem não encontrada' });
        }
        await viagem.destroy();
        res.json({ message: 'Viagem deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


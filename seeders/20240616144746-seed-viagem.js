'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const clientes = await queryInterface.sequelize.query(
      'SELECT id FROM Clientes;'
    );

    const clienteRows = clientes[0];

    return queryInterface.bulkInsert('Viagens', [
      {
        title: 'Viagem para Portugal',
        description: 'Parada Lisbon Hotel',
        status: 'pendente',
        clienteId: clienteRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Viagem para New York',
        description: 'Parada Grand Hotel ',
        status: 'pendente',
        clienteId: clienteRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Viagens', null, {});
  }
};

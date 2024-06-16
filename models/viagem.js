module.exports = (sequelize, DataTypes) => {
  const Viagem = sequelize.define('Viagem', {
      destino: {
          type: DataTypes.STRING,
          allowNull: false
      },
      data: {
          type: DataTypes.DATE,
          allowNull: false
      },
      clienteId: {
          type: DataTypes.INTEGER,
          references: {
              model: 'Clientes',
              key: 'id'
          },
          allowNull: false
      }
  }, {
      timestamps: true
  });

  Viagem.associate = (models) => {
      Viagem.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
  };

  return Viagem;
};

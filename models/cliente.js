module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.Viagem, { foreignKey: 'clienteId', as: 'viagens' });
  };

  return Cliente;
};

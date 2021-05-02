const { sequelize, DataTypes } = require("../conexion/conexion");

const Specie = sequelize.define(
  "specie",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    clasificacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
    designacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
    alturaPromedio: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
    colorPiel: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
    colorCabello: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    colorOjo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    promedioVida: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
    idioma: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    tableName: "specie",
    timestamps: false,
  }
);

module.exports.Specie = Specie;

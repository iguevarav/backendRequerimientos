const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Alumno = sequelize.define('Alumno', {
    // Define your model attributes here
    idAlumno: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    primerNombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    otrosNombres: {
        type: DataTypes.TEXT,
    },

    ApellidoPaterno: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    ApellidoMaterno: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    anio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    seccion: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    periodo:{
        type: DataTypes.TEXT,
        allowNull: false
    },

    estado: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    imagen_perfil:{
        type: DataTypes.TEXT
    }

}, {
    // Other model options go here
    tableName: 'Alumno',
    timestamps: false
});

module.exports = Alumno;

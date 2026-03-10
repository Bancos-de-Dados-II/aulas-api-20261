import sequelize from '../database/sequelize.js'
import { DataTypes } from 'sequelize';

const Usuario = sequelize.define('Usuario',{
    email:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

await Usuario.sync();

export default Usuario;
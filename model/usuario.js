import sequelize from '../database/sequelize.js'
import { DataTypes } from 'sequelize';

const Usuario = sequelize.define('Usuario',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    localizacao:{
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});

//Roda com force:true só na primeira vez, depois remove
await Usuario.sync();

export default Usuario;
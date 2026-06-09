import mongoose from '../database/mongoose.js';
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    email: String,
    nome: String,
    localizacao: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    ativo: {
        type: Boolean,
        default: true
    }
})

usuarioSchema.index({localizacao: '2dsphere'});
usuarioSchema.index({email: 1}, {unique: true});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
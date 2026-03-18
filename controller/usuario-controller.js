import Usuario from '../model/usuario.js';

export async function getUsuarios(req, res){
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
        return;
    }catch(error){
        res.status(400).json({error: error.message});
    }
}
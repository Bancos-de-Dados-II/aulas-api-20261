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

export async function getUsuarioByEmail(req, res){
    try{
        const usuario = await Usuario.findByPk(req.params.email);
        if(!usuario){
            res.status(404).json({error: 'Usuário não encontrado'});
            return;
        }
        res.json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}
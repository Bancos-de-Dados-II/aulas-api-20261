import Usuario from '../model/usuario.js';
import client from '../database/redis.js';

export async function getUsuarios(req, res){
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
        return;
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function getUsuarioById(req, res){

    const usuario = await client.get(req.params.id);
    //Cache-hit
    if(usuario){
        res.json(JSON.parse(usuario));
        return;
    }

    //Cache-miss
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if(!usuario){
            res.status(404).json({error: 'Usuário não encontrado'});
            return;
        }
        await client.set(req.params.id, JSON.stringify(usuario),{
            EX: 3600
        });
        res.json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function criarUsuario(req,res){
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function atualizarUsuario(req,res){
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if(!usuario){
            res.status(404).json({error: 'Usuário não encontrado'});
            return;
        }
        await usuario.set(req.body).save();
        res.json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deletarUsuario(req,res){
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if(!usuario){
            res.status(404).json({error: 'Usuário não encontrado'});
            return;
        }
        await usuario.destroy();
        res.json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}
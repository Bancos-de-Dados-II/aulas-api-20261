import express from 'express';

import { getUsuarios, getUsuarioByEmail, criarUsuario, atualizarUsuario } from 
    '../controller/usuario-controller.js';

const UsuarioRouter = express.Router();

UsuarioRouter.get('/', getUsuarios);
UsuarioRouter.get('/:email', getUsuarioByEmail);
UsuarioRouter.post('/', criarUsuario);
UsuarioRouter.put('/:email', atualizarUsuario);

UsuarioRouter.delete('/:email', (req,res)=>{
    res.send('TODO: Deletar usuário'); 
});

export default UsuarioRouter;
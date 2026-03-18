import express from 'express';

import { getUsuarios, getUsuarioByEmail } from 
    '../controller/usuario-controller.js';

const UsuarioRouter = express.Router();

UsuarioRouter.get('/', getUsuarios);
UsuarioRouter.get('/:email', getUsuarioByEmail);

UsuarioRouter.post('/', (req,res)=>{
    res.send('TODO: Criar usuário');
});
UsuarioRouter.put('/:id', (req,res)=>{
    res.send('TODO: Atualizar usuário');
});
UsuarioRouter.delete('/:id', (req,res)=>{
    res.send('TODO: Deletar usuário'); 
});

export default UsuarioRouter;
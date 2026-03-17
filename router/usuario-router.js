import express from 'express';

const UsuarioRouter = express.Router();

UsuarioRouter.get('/', (req,res)=>{
    res.send('TODO: Listar usuários');
});
UsuarioRouter.get('/:id', (req,res)=>{
    res.send('TODO: Listar usuário por id');
});
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
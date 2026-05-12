import express from 'express';

import { getUsuarios, getUsuarioById, criarUsuario, atualizarUsuario,
    deletarUsuario } from 
    '../controller/usuario-controller.js';

const UsuarioRouter = express.Router();

UsuarioRouter.get('/', getUsuarios);
UsuarioRouter.get('/:id', getUsuarioById);
UsuarioRouter.post('/', criarUsuario);
UsuarioRouter.put('/:id', atualizarUsuario);
UsuarioRouter.delete('/:id', deletarUsuario);

export default UsuarioRouter;
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 4000;

import UsuarioRouter from './router/usuario-router.js';

app.use('/usuarios', UsuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

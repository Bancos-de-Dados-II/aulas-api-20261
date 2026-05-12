import express from 'express'
import cors from 'cors'
import { rateLimit } from './middleware/rate-limit.js';

const app = express()

app.use(cors());
app.use(express.json())
app.use(rateLimit);

const port = process.env.PORT || 4000;

import UsuarioRouter from './router/usuario-router.js';

app.use('/usuarios', UsuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

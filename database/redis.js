import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
    password: process.env.REDIS_PASSWORD
});

await client.connect().then(()=>{
    console.log('Conectado ao Redis com sucesso');
});

client.on('error', (err)=>{
    console.log('Erro ao conectar com o redis', err);
});

export default client;
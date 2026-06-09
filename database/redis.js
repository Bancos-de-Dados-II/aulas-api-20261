import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

await client.connect().then(()=>{
    console.log('Conectado ao Redis com sucesso');
});

client.on('error', (err)=>{
    console.log('Erro ao conectar com o redis', err);
});

export default client;
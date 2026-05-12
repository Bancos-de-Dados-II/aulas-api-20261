import client from "../database/redis.js";

export async function rateLimit(req,res,next){

    const requests = await client.get(req.ip);
    //Primeiro acesso deste IP
    if(requests == null){
        await client.set(req.ip, 1, {
            EX: 60
        });
        next();
    }
    //Limite de 10 requisições por minuto
    if(requests >= 10){
        res.status(429).json({
            error: 'Muitas requisições'
        });
        return;
    }
    await client.incr(req.ip);
    next();
}
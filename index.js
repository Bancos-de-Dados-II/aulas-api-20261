import Usuario from "./model/usuario.js";

//CREATE
await Usuario.create({
    email:"joao@gmail.com",
    nome:"João"})
    .then(usuario=> 
            console.log("Usuário criado "+usuario))
    .catch(error => console.log("Erro ao criar"+error));

//READ
//console.log(await Usuario.findAll());
import Usuario from "./model/usuario.js";

//CREATE
//await Usuario.create({
//    email:"maria@gmail.com",
//    nome:"Maria"})
//    .then(usuario=> 
//            console.log("Usuário criado "+usuario))
//    .catch(error => console.log("Erro ao criar"+error));

//READ
//console.log(await Usuario.findAll());

//UPDATE
//const usuario = await Usuario.findByPk('joao@gmail.com');
//usuario.set({nome:"João da Silva"});
//await usuario.save();

//DELETE
const usuario = await Usuario.findByPk('joao@gmail.com');
//usuario.destroy();
console.log(usuario);
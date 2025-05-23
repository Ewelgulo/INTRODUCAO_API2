import express from "express";

const PORTA = 3000;

const server = express();

server.use(express.json());

server.get("/", (request, response) => {
 response.json({"dados":"Mil pessoas foram ontem"});
})

server.get("/senai", (request, response) => {
 response.json({"cursos":"cursos atuais"});
})

server.post("/", (request, response) => {
 console.log(request.body);

 response.sendStatus(200);
})

server.listen(PORTA, () => console.log("Meu servidor tá funcionando na porta:", PORTA));
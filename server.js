import express from 'express'




const app = express()
app.use(express.json())
const Alunos = [{
	"id": 1,
	"nome": "Marcao Ruim",
	"idade": 25,
	"curso": "Hackerman"
},
{
	"id": 2,
	"nome": "Justina",
	"idade": 28,
	"curso": "TADM"
}]

app.post('/Alunos', (req, res) =>{
    Alunos.push(req.body)
    res.status(201).json(req.body)
})

app.get('/Alunos', (req, res) =>{
const indexAluno = Alunos.findIndex(Aluno => Aluno.id === Number(request.params.id));

 if (indexAluno == -1) {
  response.sendStatus(404);
 } else {
  res.status(200).json(Alunos[indexAluno]);
 }
})
    
app.patch('/Alunos/:id', (req, res) =>{
    res.status(200).json(Aluno)
     const indexAluno = Alunos.findIndex(Aluno => Aluno.id === Number(request.params.id));

 if (indexAluno == -1) {
  response.sendStatus(404);
 } else {
  
  request.body.id = Alunos[indexAluno].id;

  Alunos[indexAluno] = request.body;
  response.status(200).json(Alunos[indexAluno]);
 }
})
app.delete("/Alunos/:id", (request, response) => {
 const indexAluno = Alunos.findIndex(Aluno => Aluno.id === Number(request.params.id));

 if (indexAluno == -1) {
  response.sendStatus(404);
 } else {
  Alunos.splice(indexAluno, 1);

  response.sendStatus(200);
 }
})

app.listen(3000)



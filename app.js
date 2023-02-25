//Carrego o módulo para a variável Express
const Express = require('express')

// Instancio a Express para a minha variável app
const app = Express()


//Criou a primeira rota do projeto


app.get("/", function(req, res)  {

 res.send("Olá mundo,autalizado")
})



//Iniciou o servidor

const servidor = app.listen(3000, function (req, res) {
   console.log("Servidor ok")
 
}
)
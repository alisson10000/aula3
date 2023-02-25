const Express = require('express')
const app = Express()


//rota home


app.get("/", function(req, res)  {

 res.send("Olá mundo,autalizado")
})





const servidor = app.listen(3000, function (req, res) {
   console.log("Servidor ok")
 
}
)
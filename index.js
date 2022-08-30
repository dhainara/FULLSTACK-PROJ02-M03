require('dotenv').config()

const express = require("express")
const cors = require("cors")
const router = require("./src/routers/animes.routers.js")
const {mongoConnect} = require('./src/database/mongoDB/mongo.js')
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require("./src/docs/swagger.json")
const swaggerAutogen = require('./swagger_output.json')


const port = 3000??process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/docs", swaggerUi.serve)
app.get("/api/docs", swaggerUi.setup(swaggerDoc))
app.use('/animes', router)

mongoConnect()

app.get('/', function (req, res) {
    res.send('Bem vindo a API de Animes!\n \nAqui você poderá ver todos os seus animes de uma só vez, ver um anime especifico existente na lista, excluir um anime, modificar um de seus dados, adicionar e/ou excluir um anime.')
})

app.listen(port, () => {
    console.log('A aplicação está rodando perfeitamente!');
    console.log(`Acesse em: http://localhost:${port}`);
});
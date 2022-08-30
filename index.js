const express = require("express")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require("./docs/swagger.json")
const router = require("./routers/animes.routers.js")
const {mongoConnect} = require('./database/mongoDB/mongo.js')

const port = 3000
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

app.get('/testes', function (req, res) {
    //dando os valores para o character
    const anime = new AnimeEntity({
        id: 5,
        title: "Back",
        protagonist: "this.protagonist",
        genre: "this.genre",
        seasons: "0",
        year: "2000",
        characters: {}
    })
    
    //validando
    anime.validate()

    //getCharacter está retornando o os dados

    res.send(anime.getAnime())
})

app.listen(port, () => {
    console.log('A aplicação está rodando perfeitamente!');
    console.log(`Acesse em: http://localhost:${port}`);
});
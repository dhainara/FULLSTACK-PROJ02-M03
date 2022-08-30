//routers armazena os caminhos que serão feitos na aplicação.

import { Router } from "express"
import { validParams } from "../middlewares/validParams.js"
import { animesController } from "../controllers/animes.controllers.js"

const animesRouter = Router()

animesRouter.get('/all-animes', animesController.findAllAnimes)
animesRouter.get('/animeById/:id', validParams, animesController.findAnimeById)
animesRouter.post('/create-anime', animesController.createAnime)
animesRouter.put('/update-anime/:id', validParams, animesController.updateAnime)
animesRouter.delete('/delete/:id', validParams, animesController.deleteAnime)

export default animesRouter
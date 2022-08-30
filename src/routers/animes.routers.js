//routers armazena os caminhos que serão feitos na aplicação.
const express = require("express")
const router = express.Router()
const validParams = require('../middlewares/validParams.js')
const animesController = require('../controllers/animes.controllers.js')

router.get('/all-animes', animesController.findAllAnimes)
router.get('/animeById/:id', validParams, animesController.findAnimeById)
router.post('/create-anime', animesController.createAnime)
router.put('/update-anime/:id', animesController.updateAnime)
router.delete('/delete/:id', validParams, animesController.deleteAnime)

module.exports = router

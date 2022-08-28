import animes from "../mocks/animes.js"
import CharacterEntity from "../entities/characters.entity.js"
import AnimeEntity from "../entities/animes.entity.js"

function findAllAnimes() {
    console.log('findAllAnimes executado.')
    return animes
}

function findAnimeById(id) {
    console.log('findAnimesById executado.')
    const anime = animes.find((anime) =>anime.id ==id)
    return anime
}

function createAnime(anime) {
    console.log('createAnime executado.')
    const newAnime = new AnimeEntity(anime)
    newAnime.validateAnime()
    //validação de character caso ele exista
    
    let newCharacters = []

    anime.characters.map((character) => {
        const newCharacter = new CharacterEntity(character)
        newCharacter.validateCharacter()
        newCharacters.push(newCharacter.getCharacter())
    })     

    const createdAnime = {
        ...newAnime.getAnime(),
        charecters: newCharacters,
    }

    animes.push(createdAnime)

    return createdAnime
}

function updateAnime(anime) {
    console.log('updateAnime executado.')

    const updateAnime = new AnimeEntity(anime)
    updateAnime.validateAnime()

    const updatedCharacters = []
    anime.characters.map((character) => {
        const updatedCharacter = new CharacterEntity(character)
        updatedCharacter.validateCharacter()
        updatedCharacters.push(updatedCharacter.getCharacter())
    })  

    const updatedAnime = {
        ...updateAnime.getAnime(),
        characters: updatedCharacters
    }

    animes.map((eachAnime, index) => {
        if (eachAnime.id === updateAnime.id) {
            animes.splice(index, 1, updateAnime)//irá remover o objeto index daarray anime, e recolor os dados do updated anime
        }
    })

    return updatedAnime

}

function deleteAnime(id) {
    console.log('deleteAnime executado.')

    const animeIndex = animes.findIndex((element => element.id == id))
    animes.splice(animeIndex, 1)
}

export const animesService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}
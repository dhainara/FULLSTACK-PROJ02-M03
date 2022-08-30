import validator from "validator"

export const validParams = (req, res, next) => {
    const idParam = req.params.id

    const validId = validator.isUUID(idParam)
    if (!validId) {
        res.status(400).send("O parametro não é valido.")
    } else {
        next()
    }
}
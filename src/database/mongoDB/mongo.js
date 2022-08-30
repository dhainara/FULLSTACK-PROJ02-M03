const { connect } = require('mongoose')
require('dotenv').config()
function mongoConnect() {
    connect(process.env.MONGO_URL || "mongodb://admin@localhost:27020/").then(() => {
        console.log("MongoDB conectado!")
    }).catch((err) => {
        console.log("Error no database: ", err)
    })
}

module.exports = {mongoConnect}
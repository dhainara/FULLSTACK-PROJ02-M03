const {connect} = require('mongoose')

function mongoConnect() {
    connect("mongodb://localhost:27017").then(() => {
        console.log("MongoDB conectado!")
    }).catch((err) => {
        console.log("Error no database: ", err)
    })
}

module.exports = {mongoConnect}
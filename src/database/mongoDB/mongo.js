if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
    const { connect } = require('mongoose')

function mongoConnect() {
    connect(process.env.MONGO_URL || "mongodb://admin@localhost:27020/").then(() => {
        console.log("MongoDB conectado!")
    }).catch((err) => {
        console.log("Error no database: ", err)
    })
}

module.exports = {mongoConnect}
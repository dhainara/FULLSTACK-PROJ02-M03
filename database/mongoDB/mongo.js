import mongoose from "mongoose"

function connect() {
    mongoose.connect("mongodb://localhost:27017").then(() => {
        console.log("MongoDB conectado!")
    }).catch((err) => {
        console.log("Error no database: ", err)
    })
}

export default connect
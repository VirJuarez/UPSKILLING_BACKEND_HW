const mongoose = require("mongoose")
const {DB_URL}= require("../config/envs")

const conn = mongoose.createConnection(DB_URL)

// Character.find()
//     .populate("films", ["_id", "title"])
//     .then((res)=>console.log(res))
//id y title son opcionales, sino me trae todo lo que haya en las films

module.exports= {
    Character : conn.model("Character", require("./schemas/characterschema")),
    Film : conn.model("Film", require("./schemas/filmschema")),
    Planet : conn.model("Planet", require("./schemas/planetaschema")),
}
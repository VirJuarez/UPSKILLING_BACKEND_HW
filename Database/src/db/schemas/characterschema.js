const {Schema} =require("mongoose")

const characterschema = new Schema ({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref:"Planet"},
    films:[{type:String, ref:"Film"}]
})

characterschema.statics.list = async function(){
    return await this.find()
    .populate("homeworld", ["_id" , "name"])
    .populate("films", ["_id", "title"])
}

characterschema.statics.get = async function(id){
    return await this.findById(id)
    .populate("homeworld", ["_id" , "name"])
    .populate("films", ["_id", "title"])
}

characterschema.statics.insert = async function(character){
    return await this.create(character)
}




module.exports= characterschema
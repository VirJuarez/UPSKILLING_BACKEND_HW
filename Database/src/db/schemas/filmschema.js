const {Schema} =require("mongoose")

const filmschema = new Schema ({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type:String, ref:"Character"}],
    planets: [{type:String, ref:"Planet"}]
})

filmschema.statics.list = async function(){
    return await this.find()
    .populate("characters", ["_id" , "name"])
    .populate("planets", ["_id", "name"])
}

filmschema.statics.get = async function(id){
    return await this.findById(id)
    .populate("characters", ["_id" , "name"])
    .populate("planets", ["_id", "name"])
}

filmschema.statics.insert = async function(film){
    return await this.create(film)
}


module.exports= filmschema
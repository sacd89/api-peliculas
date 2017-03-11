var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var actorSchema = new Schema({
    nombre:{type:String, required:true},
    nacionalidad:{type:String, required:true},
    edad:{type:Number, required:true}
});


var Actor = mongoose.model("Actor", actorSchema);
module.exports = Actor;

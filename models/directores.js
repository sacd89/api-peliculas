var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema;

//colecciones = tablas
var directorSchema = new Schema({
  nombre:{type:String, required:true},
  edad:{type:Number, required:true},
  nacionalidad:{type:String, required:true}
});

var Director = mongoose.model("Director", directorSchema);// para poder utilizar el modelo en otros lados
module.exports = Director;

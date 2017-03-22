var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema;
var Director = mongoose.model('Director');
var Actor = mongoose.model('Actor');

//colecciones = tablas
var peliculaSchema = new Schema({
  nombre:{type:String, required:true},
  descripcion:{type:String, required:true},
  year:{type:Number, required:true},
  genero:{type:String, required:true},
  director: {type:String, required:true},
  actor: {type:String, required:true}
  // director:{type:Schema.ObjectId, ref:"Director"},
  // actor:{type: Schema.ObjectId, ref:"Actor"}
});

var Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;

var express = require('express'); //Cargamos el paquete express
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors'); //Sirve para conectar el api con la app
var port = process.env.PORT || 5000; //Puerto
var mongoose = require('mongoose'); //Cargamos el paqueter mongoose

var configDB = require('./config/database.js'); //Sirve para traerse la configuración de la base de datos
mongoose.connect(configDB.url); //Se conecta a la base de datos

app.use(bodyParser.urlencoded({ extended: true })); //Configuración del body-parser
app.use(bodyParser.json()); //Configuración del body-parser
app.use(cors()); //Configuración del cors



var server = require('http').Server(app);

require('./routes.js')(app, mongoose, cors); //Utilizar archivos routes con sus metodos

//Configuración del CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.listen(port, function(){
  console.log("Escuchando desde el puerto"+port);
});

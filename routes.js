//Se extienden los modelos
var Director = require('./models/directores');
var Actor = require('./models/actores');
var Pelicula = require('./models/peliculas');

module.exports = function(app,  mongoose, cors){

  //-------------------------------PELICULAS---------------------------------//

  /* Metodo para crear peliculas*/
  app.post("/createPeliculas", function(req, res, next){
    console.log("REQ EN crearPeliclas:");
    console.log(req);
    var pelicula = new Pelicula({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      year: req.body.year,
      genero: req.body.genero,
      director: req.body.director,
      actor: req.body.actor
    });

   //Guardamos la pelicula en la base de datos
    pelicula.save(function(err, obj){
      if(err){
        return res.send(err);
      }else{
         return res.status(200).send({message:'Pelicula creada con exito'});
      }
    });
  });

  /* Metodo para obtener peliculas de la base de datos sin filtros */
  app.get("/getPeliculas", function(req,res, next){
    Pelicula.find({})
    .exec(function(err, pelicula){
      if(err){
        res.send(err);
      }else{
        res.json(pelicula);
      }
    });
  });

  /*Metodo para modificar peliculas por su id*/
  app.put("/modificarPelicula/:idPelicula", function(req, res, next){
    console.log("REQ:");
    console.log(req);
    Pelicula.findById(req.params.idPelicula, function(err, pelicula) {
      if (err){
        res.send(err);
      }else{
        console.log("NOMBRE", req.body.nombre);
        pelicula.nombre = req.body.nombre;
        pelicula.descripcion = req.body.descripcion;
        pelicula.year = req.body.year;
        pelicula.genero = req.body.genero;
        pelicula.director = req.body.director;
        pelicula.actor = req.body.actor;
      }

      // Guardamos la pelicula
      pelicula.save(function(err) {
        if (err) res.send(err);
        res.status(200).send({message:'Pelicula actualizada!'});
      });
    });
  });

  /*Metodo para eliminar peliculas por su id*/
  app.delete("/eliminarPelicula/:idPelicula", function(req, res, next){
    console.log("REQ EN ELIMINAR:");
    console.log(req);
    Pelicula.remove({_id: req.params.idPelicula}, function(err, pelicula) {
      if (err) res.send(err);
      res.json({message:'Pelicula eliminada con exito'});
    });
  });

//------------------------------------ACTORES----------------------------------

  /*Metodo para crear actores en la base de datos*/
  app.post("/createActores", function(req, res, next){
    console.log("REQ EN crearActores:");
    console.log(req);
    var actor = new Actor({
      nombre: req.body.nombre,
      edad: req.body.edad,
      nacionalidad: req.body.nacionalidad
    });

    actor.save(function(err, obj){
      if(err){
        res.send(err);
      }else{
        res.send({message:'Actor creado con exito'});
      }
    });
  });

  /*Metodo para sacar los actores de la base de datos*/
  app.get("/getActores", function(req, res, next){
    Actor.find({})
    .exec(function(err, actor){
      if(err){
        res.send(err);
      }else{
        res.json(actor);
      }
    });
  });

  /*Metodo para modificar los actores por medio de su id*/
  app.put("/modificarActor/:idActor", function(req, res, next){
    console.log("REQ EN modificarActor:");
    console.log(req);
    Actor.findById(req.params.idActor, function(err, actor) {
      if (err){
        res.send(err);
      }else{
        actor.nombre = req.body.nombre;
        actor.edad = req.body.edad;
        actor.nacionalidad = req.body.nacionalidad;
      }

      // Guardamos el actor
      actor.save(function(err) {
        if (err) res.send(err);
        res.json({message:'Actor actualizada!'});
      });
    });
  });


  /*Metodo para eliminar actores mediante su id*/
  app.delete("/eliminarActor/:idActor", function(req, res, next){
    console.log("REQ EN Actor ELIMINAR:");
    console.log(req);
    Actor.remove({_id: req.params.idActor}, function(err, actor) {
      if (err) res.send(err);
      res.json({message:'Actor eliminado con exito'});
    });
  });

//-----------------------------DIRECTORES-------------------------------------

  /*Metodo para agregar directores a la base de datos*/
  app.post("/createDirectores", function (req, res, next){
    console.log("REQ EN directores:");
    console.log(req);
    var director = new Director({
      nombre: req.body.nombre,
      edad: req.body.edad,
      nacionalidad: req.body.nacionalidad
    });

    director.save(function(err, obj){
      if(err){
        res.send(err);
      }else{
        res.send({message:'Director creado con exito'});
      }
    });
  });

  /*Metodo para obtener los directores de la base de datos*/
  app.get("/getDirectores", function(req, res, next){
    Director.find({})
    .exec(function(err, director){
      if(err){
        res.send(err);
      }else{
        res.json(director);
      }
    });
  });

  /*Metodo para modificar a los directores mediante su id*/
  app.put("/modificarDirector/:idDirector", function(req, res, next){
    console.log("REQ EN modificarDirector:");
    console.log(req);
    Director.findById(req.params.idDirector, function(err, director) {
      if (err){
        res.send(err);
      }else{
        director.nombre = req.body.nombre;
        director.edad = req.body.edad;
        director.nacionalidad = req.body.nacionalidad;
      }

      // Guardamos director
      director.save(function(err) {
        if (err) res.send(err);
        res.json({message:'Director actualizada!'});
      });
    });
  });

  /*Metodo para eliminar director mediante su id*/
  app.delete("/eliminarDirector/:idDirector", function(req, res, next){
    console.log("REQ EN eliminarDirector:");
    console.log(req);
    Director.remove({_id: req.params.idDirector}, function(err, director) {
      if (err) res.send(err);
      res.json({message:'Director eliminado con exito'});
    });
  });

};

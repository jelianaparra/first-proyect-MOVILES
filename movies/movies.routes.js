const Movies = require("../movies/movies.controller");
const { Router } = require("express");
const router = Router();

// obtener una sola peli
router.post("/movie", Movies.getMovie);

// obtener todas las pelis
router.get("/allmovies", Movies.getMovies);

// obtener una sola pelicula por el titulo
router.post("/moviebytitle", Movies.getMoviebytitle);

// insertar una pelicula
router.post("/addmovie", Movies.addMovies);

// acttualizar una pelicula
router.put("/uptademovies", Movies.uptadeMovies);

//borrar una pelicula
router.delete("/deletemovies", Movies.deleteMovies);

module.exports = router;

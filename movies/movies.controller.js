const moviesSchema = require("../movies/movies.models");

exports.getMovie = async (req, res) => {
  const id = req.body.id;
  try {
    let movies = await moviesSchema.findById(id);
    res.json({
      done: true,
      movies,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the movie",
    });
  }
};

exports.getMoviebytitle = async (req, res) => {
  const id = req.body.title;
  try {
    let movies = await moviesSchema.find({ title: id }).exec();
    res.json({
      done: true,
      movies,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the movie",
    });
  }
};

exports.getMovies = async (req, res) => {
  try {
    let movies = await moviesSchema.find();
    res.json({
      done: true,
      movies,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the movies",
    });
  }
};

exports.addMovies = async (req, res) => {
  const body = req.body;
  const id = req.id;
  try {
    const movie = new moviesSchema(req.body);
    await movie.save();
    res.json({
      done: true,
      msg: "Movie added successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The movie could not be added",
    });
  }
};

exports.uptadeMovies = async (req, res) => {
  const { body } = req;
  const { id } = body;
  try {
    await moviesSchema.findByIdAndUpdate(id, body);
    res.json({
      done: true,
      msg: "Movie updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The movie could not be updated",
    });
  }
};

exports.deleteMovies = async (req, res) => {
  const id = req.body.id;
  try {
    await moviesSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Movie delete successfully",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Movie could not be deleted",
    });
  }
};

const movieDatabase = require('../database/movie.db');

function create(req, res) {
  const data = req.body;

  if (!data.title || !data.year) {
    return res.status(400).json({
      error: 'title e year são obrigatórios'
    });
  }

  const movie = {
    id: Date.now(),
    title: data.title,
    description: data.description || '',
    year: data.year,
    genres: data.genres || [],
    image: data.image || '',
    video: data.video || ''
  };

  movieDatabase.push(movie);

  return res.status(201).json(movie);
}

function list(req, res) {
  return res.json(movieDatabase);
}

function update(req, res) {
  const id = Number(req.params.id);

  const movie = movieDatabase.find(item => item.id === id);

  if (!movie) {
    return res.status(404).json({
      error: 'registro não encontrado'
    });
  }

  Object.keys(req.body).forEach(key => {
    movie[key] = req.body[key];
  });

  return res.json(movie);
}

function remove(req, res) {
  const id = Number(req.params.id);

  const index = movieDatabase.findIndex(item => item.id === id);

  if (index < 0) {
    return res.status(404).json({
      error: 'registro não encontrado'
    });
  }

  movieDatabase.splice(index, 1);

  return res.json({
    message: 'removido com sucesso'
  });
}

module.exports = {
  create,
  list,
  update,
  remove
};

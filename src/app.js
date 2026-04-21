const express = require('express');
const movieRoutes = require('./routes/movie.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Movie funcionando');
});

app.use('/movies', movieRoutes);

module.exports = app;

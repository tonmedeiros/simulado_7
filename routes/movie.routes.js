const express = require('express');

const router = express.Router();

const controller = require('../controllers/movie.controller');

router.post('/', controller.create);
router.get('/', controller.list);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;

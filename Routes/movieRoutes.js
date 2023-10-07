const express = require('express');
const movieController = require('../Controllers/movieController');

const router = express.Router();

/**
 * @swagger
 * /api/movies/movies:
 *   get:
 *     summary: Mendapatkan daftar film
 *     description: Mendapatkan daftar film.
 *     responses:
 *       '200':
 *         description: Sukses mendapatkan daftar film
 *       '500':
 *         description: Kesalahan server
 */

// GET movies with pagination
router.get('/movies', movieController.getMoviesWithPagination);

module.exports = router;

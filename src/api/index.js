const express = require('express');
import movies from '../data/movies.json';

const router = express.Router();

const SEARCH_BY_PARAMS = ['title', 'genres'];

router.post('/movies', (req, res) => {
    const { query, searchBy } = req.body;

    if(!query || !SEARCH_BY_PARAMS.includes(searchBy)) {
        return res.status(200).json({data: movies, total: movies.length});
    }

    const results = movies.filter((movie) => movie[searchBy].includes(query));

    return res.status(200).json({data: results, total: results.length});
});

router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;

    if(!movieId) {
        return res.status(400).json({message: 'No movie id provided.'});
    }

    const result = movies.find((movie) => `${movie.id}` === `${movieId}`);

    return res.status(200).json({data: result});
});

module.exports = router;

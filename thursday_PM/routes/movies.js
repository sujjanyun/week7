'use strict';
const express = require('express'),
    router = express.Router();

const moviesModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'List of Movie Titles',
            data: moviesModel,
        },
        partials: {
            body: 'partials/movies-list',
        },
    });
});

router.get('/:imdbID', (req, res) => {
    const { imdbID } = req.params;
    const movie = moviesModel.find((movie) => {
        if (movie.imdbID == imdbID) {
            return movie;
        }
    })
    if (movie) {
        res.render('template', {
            locals: {
                title: 'Movie Details',
                movie
            },
            partials: {
                body: 'partials/movies-details',
            },
        });
    } else {
        res.status(404).send(`No movie found that matches year, ${imdbID}`);
    }
});

module.exports = router;
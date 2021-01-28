'use strict';
const express = require('express'),
    router = express.Router();

const ceosModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'List of Apple CEOs',
            data: ceosModel
        },
        partials: {
            body: 'partials/ceo-list',
        },
    });
});

router.get('/:slug', (req, res) => {
    // this is destructuring
    const { slug } = req.params;
    const executive = ceosModel.find((exectutive) => {
        if (executive.slug == slug) {
            return executive;
        }
    })
    if (executive) {
        res.render('template', {
            locals: {
                title: 'CEO Details',
                executive
            },
            partials: {
                body: 'partials/ceo-details',
            },
        });
    } else {
        res.status(404).send(`No CEO found that matches slug, ${slug}`);
    }
});

module.exports = router;
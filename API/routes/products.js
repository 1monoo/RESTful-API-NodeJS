const express = require('express');
const router = express.Router();

router.get('/', (rep, res, next) =>{
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (rep, res, next) =>{
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

module.exports = router;
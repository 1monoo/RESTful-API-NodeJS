const express = require('express');
const router = express.Router();

router.get('/', (rep, res, next) =>{
    res.status(200).json({
        messenge: 'Handling GET request to /products'
    });
});

router.post('/', (rep, res, next) =>{
    res.status(200).json({
        messenge: 'Handling POST request to /products'
    });
});

module.exports = router;
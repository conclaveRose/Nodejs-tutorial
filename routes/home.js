"use strict";

const express = require('express');
const router = express.Router();


// index 페이지로 랜더링 
router.get('/', (req, res) => {
    res.render('home/index');
})

module.exports = router;
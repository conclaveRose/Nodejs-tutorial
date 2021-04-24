"use strict";

const express = require('express');
const router = express.Router();
const User = require('../models/User'); //user스키마 모델을 가져온다.


router.get('/', (req, res) => {
    res.send('hello World 좋은 하루 보내세요~~ ')
})

router.post('/', (req, res) => {
    //회원 가입 할 때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터베이스에 넣어준다.
    User.create(req.body, (err, user) => {
        if (err) {
            return res.json(err);
        }
        res.send('성공적으로 가입완료');
    })
})


module.exports = router;
"use strict";

const express = require('express')
const app = express();
const bodyParser = require('body-parser'); //고객이 입력한 정보는 post요청에 의해 서버로 req.body객체안에 담겨져 전달되고 이것을 parsing하기 위해 필요한 패키지라고 보면 된다. 
const ejs = require('ejs'); //ejs template engine을 사용한다. 
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' })



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//라우트 
app.use('/', require('./routes/home'));
// app.use('/posts, require()');

const port = 3000
app.listen(port, () => {
    console.log(`서버 실행됨 http://localhost:${port}`)
})




//DB setting  
mongoose.set('useNewUrlParser', 'true');
mongoose.set('useCreateIndex', 'true');
mongoose.set('useUnifiedTopology', 'true');
mongoose.set('useFindAndModify', 'false');
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.once('open', () => {
    console.log('DB에 연결됨');
});
db.on('error', (err) => {
    console.log(`DB ERROR : ${err}`);
});
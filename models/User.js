const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 //기본값
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //토큰 유효기간 
        type: Number
    }


})

// 위에서 정의한 스키마를 모델로 감싸준다. 
const User = mongoose.model('user', userSchema);

module.exports = User; //정의한 모델을 내보내기 한다. (다른 파일이 사용할 수 있게 해주기 위해 )
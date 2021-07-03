const mongoose = require('mongoose');
const userSchema = new mongoose.Shema(
    {
        sub:{
            ApiKey: String,
            type: String,
            index: true,
            unique: true,
            required: true,
        },
    },
    {timeStamps: true},
);
module.exports = mongoose.model('users',userSchema);
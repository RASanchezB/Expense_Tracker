const mongoose = require('moongoose');
const userSchema = new mongoose.Shema(
    {
        sub:{
            type: String,
            index: true,
            unique: true,
            required: true,
        },
    },
    {timeStamps: true},
);
module.exports = mongoose.model('users',userSchema);
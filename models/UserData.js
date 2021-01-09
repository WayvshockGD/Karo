const { Schema, model } = require('mongoose');

const UserData = new Schema({
    ID      :     { type : String },
    Amount  :     { type : String },
})

module.exports = model("user", UserData)
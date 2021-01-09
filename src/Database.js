const mongoose = require('mongoose');
const Config = require('./Config');

class Database extends Config {

    constructor() {
        super();

        mongoose.connect(this.DBConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(r => {})
    }
}

module.exports = Database;
//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
require('dotenv').config();

module.exports = {
    db: {
        uri: process.env.MONGO_STR, //place the URI of your mongo database here.
    }
};

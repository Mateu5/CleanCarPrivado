let path = __dirname + "/.env"

console.log( path );

let dotenv = require('dotenv').config({
    path: path
});

console.log( process.env );

module.exports = {
    "google_client_id" : GOOGLE_CLIENT_ID,
    "google_client_secret" : GOOGLE_CLIENT_SECRET
}
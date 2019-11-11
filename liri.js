require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let Axios = require('axios');


userCommand = process.argv[2];
userInput = process.argv.slice(3).join(" ");

switch (userCommand) {
    case "concert-this":
        //node liri.js concert-this <artist/band name here>\
        concertThis(userInput);
        break;
    case "spotify-this-song":
        // node liri.js spotify-this-song '<song name here>'
        console.log("spotify this song selected")
        break;
    case "movie-this":
        //node liri.js movie-this '<movie name here>'
        console.log("movie this selected")
        break;
    case "do-what-it-says":
        //node liri.js do-what-it-says
        console.log("do what it says selected")
        break;
    default:
        console.log("please try entering in again.");
        break;
}

function concertThis(artistName){
    console.log(artistName);
}

function spotifySong(){
    let spotify = new Spotify(keys.spotify);
}
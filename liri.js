require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');


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

function concertThis(artist){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data[0]);
  })

}

function spotifySong(songName){
    let spotify = new Spotify(keys.spotify);

}

function moveThis(movieName){
    console.log(movieName);
}

function doWhatItSays(artistName){
    console.log(artistName);
}


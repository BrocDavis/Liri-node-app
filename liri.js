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
        spotifySong(userInput);
        break;
    case "movie-this":
        //node liri.js movie-this '<movie name here>'
        movieThis(userInput);
        break;
    case "do-what-it-says":
        //node liri.js do-what-it-says
        console.log("do what it says selected")
        doWhatItSays(userInput);
        break;
    default:
        console.log("please try entering in again.");
        break;
}

function concertThis(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            let venues = [];
            console.log(response.data[0]);
        })
}

function spotifySong(songName) {
    let spotify = new Spotify(keys.spotify);

}

function movieThis(movieName) {
        //default movie to Mr Nobody if no movie is chosen
        if(!movieName){movieName = "Mr. Nobody"}
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movieName + "&type=movie").then(
            function (response) {
                console.log(`
                Name: ${response.data.Title}
                Released: ${response.data.Released}
                IMDB rating: ${response.data.Ratings[0].Value}
                Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
                Country: ${response.data.Country}
                Language: ${response.data.Language}
                Plot: ${response.data.Plot}
                Actors: ${response.data.Actors}
                `);
            })
}
function doWhatItSays(artistName) {
    console.log(artistName);
}


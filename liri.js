require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const fs = require("fs");
let spotify = new Spotify(keys.spotify);


userCommand = process.argv[2];
userInput = process.argv.slice(3).join(" ");

switch (userCommand) {
    case "concert-this":
        concertThis(userInput);
        break;
    case "spotify-this-song":
        spotifySong(userInput);
        break;
    case "movie-this":
        movieThis(userInput);
        break;
    case "do-what-it-says":
        doWhatItSays(userInput);
        break;
    default:
        console.log("Command not found. Please try entering in again.");
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
    if (!songName) { songName = "'The Sign' Ace of base" }
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let result = data.tracks.items[0];
        console.log(`
        Artist(s): ${result.album.artists[0].name}
        Song Name: ${result.name}
        preview URL:${result.external_urls.spotify}
        album title: ${result.album.name}
                `);
    })
}

function movieThis(movieName) {
    //default movie to Mr Nobody if no movie is chosen
    if (!movieName) { movieName = "Mr. Nobody" }
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
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var textArray = data
        console.log(textArray);
        userCommand = textArray[0];
        userInput = textArray.slice(1)
        console.log(userInput);

        switch (userCommand) {
            case "concert-this":
                concertThis(userInput);
                break;
            case "spotify-this-song":
                spotifySong(userInput);
                break;
            case "movie-this":
                movieThis(userInput);
                break;
                default:console.log("text file not formatted properly.")
        }

    });
}

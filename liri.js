require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");



var commands = process.argv[2];
var media = process.argv[3];


switch (commands) {
    case "concert-this":
        findGig();
        console.log("concert-this");
        break;
    case "spotify-this-song":
        findSong();
        console.log("spotify-this-song");
        break;
    case "movie-this":
        findMovie();
        console.log("movie-this");
        break;
    case "do-what-it-says":
        doIt();
        console.log("do-what-it-says" + "random.txt");
        break;

    default:
        console.log("Invalid request!!! please try again :)");
        break;

};


// CONCERT SEARCH FUNCTION
function findGig() {
    if (media != null) {
        var gig = media;
    }
    else {
        var gig = "Eminem";

    }

    var queryURL = "https://rest.bandsintown.com/artists/" + gig + "/events?app_id=codingbootcamp";

    console.log(queryURL + " url-test");

    axios.get(queryURL).then(

        function (response) {
            console.log("response-test:")
            // always comes up undefined >:(
            console.log(response.data.venues)
        });

};


// MOVIE SEARCH FUNCTION
function findMovie() {
    if (media != null) {
        var movie = media;
    }
    else {
        var movie = "Robocop"
    }

    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    console.log(queryURL);

    axios.get(queryURL).then(
        function (response) {
            console.log("<<<<<<<<TITLE:>>>>>>>>");
            console.log(response.data.Title);
            console.log("<<<<<<<<YEAR:>>>>>>>>");
            console.log(response.data.Year);
            console.log("<<<<<<<<IMDB RATING:>>>>>>>>");
            console.log(response.data.Ratings[0].Value);
            console.log("<<<<<<<<ROTTEN TOMATOES RATING:>>>>>>>>");
            console.log(response.data.Ratings[1].Value);
            console.log("<<<<<<<<COUNTRY:>>>>>>>>");
            console.log(response.data.Country);
            console.log("<<<<<<<<LANGUAGE:>>>>>>>>");
            console.log(response.data.Language);
            console.log("<<<<<<<<PLOT:>>>>>>>>");
            console.log(response.data.Plot);
            console.log("<<<<<<<<ACTORS:>>>>>>>>");
            console.log(response.data.Actors);

        }

    )


};


// SPOTIFY SEARCH FUNCTION
function findSong() {

    if (media != null) {
        var song = media;
    }
    else {
        var song = "This Will Be Our Year"
    }


    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        else {
            var songInfo = data.tracks.items;

            console.log("<<<<<<<<ARTIST:>>>>>>>>");
            console.log(songInfo[0].artists[0].name);
            console.log("<<<<<<<<SONG:>>>>>>>>");
            console.log(songInfo[0].name);
            console.log("<<<<<<<<PREVIEW:>>>>>>>>");
            console.log(songInfo[0].external_urls.spotify);
            console.log("<<<<<<<<ALBUM:>>>>>>>>");
            console.log(songInfo[0].album.name);
        }


    });

};



function doIt() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.

        console.log(dataArr[1])
        var thatway = dataArr[1];

        spotify.search({ type: 'track', query: thatway }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            else {
                var songInfo = data.tracks.items;

                console.log("<<<<<<<<ARTIST:>>>>>>>>");
                console.log(songInfo[0].artists[0].name);
                console.log("<<<<<<<<SONG:>>>>>>>>");
                console.log(songInfo[0].name);
                console.log("<<<<<<<<PREVIEW:>>>>>>>>");
                console.log(songInfo[0].external_urls.spotify);
                console.log("<<<<<<<<ALBUM:>>>>>>>>");
                console.log(songInfo[0].album.name);
            }


        });


    });

};
require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
var axios = require("axios");



var commands = process.argv[2];
var media = process.argv[3];


switch (commands) {
    case "concert-this":
        findGig();
        console.log("concert-this" + media);
        break;
    case "spotify-this-song":
        console.log("spotify-this-song" + media);
        break;
    case "movie-this":
        findMovie();
        console.log("movie-this" + media);
        break;
    case "do-what-it-says":
        console.log("do-what-it-says" + "random.txt");
        break;

    default:
        console.log("Invalid request!!! please try again :)");
        break;

};



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
            console.log(response.data.offers)
        });

};

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

// function findSong (){

// };



// function doIt (){

// };
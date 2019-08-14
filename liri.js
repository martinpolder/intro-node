require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);



var commands = process.argv[2];
var media = process.argv[3];


switch (commands){
    case "concert-this":
        console.log("concert-this" + media);     
        break;
    case "spotify-this-song":
        console.log("spotify-this-song" + media);
        break;
    case "movie-this":
        console.log("move-this" + media);
        break;
    case "do-what-it-says":
        console.log("do-what-it-says" + "random.txt");
        break;    

};



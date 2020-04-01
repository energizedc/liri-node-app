require("dotenv").config();

var keys    = require("./keys.js");

var Spotify = require("node-spotify-api");
var request = require("request");
var moment  = require("moment");
var fs      = require("fs");
var axios   = require("axios")
var omdb    = require("omdb");


var spotify = new Spotify(keys.spotify);
//console.log(keys);

var action1 = process.argv[2];
console.log(action1);

var userInput = process.argv.slice(3).join(" ");
console.log(userInput);



console.log("i am at the beginning of switch");


    switch (action1) {
        case "concert-this":
            concertThis(userInput);
            break;

        case "movie-this":
            movieThis(userInput);
            break;

        case "spotify-this-song":
            songThis(userInput);
            break;
    
        case "do-what-it-says":
            other1();
            break;
    }
//////////////////////////////////////////////////////////////////////   
////*****      SEARCHING FOR CONCERT VENUES AND DATES       *********/
//////////////////////////////////////////////////////////////////////

    function concertThis(){

        console.log( "i am in concerts");

    //    var queryUrl = "https://rest.bandsintown.com/artists/userInput/events?app_id=codingbootcamp";

        var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
        
        axios.get(queryUrl).then(
            function(response) {
                if(response.data[0].venue !=  undefined) {
                    console.log("Event Veunue: " + response.data[0].venue.name);
                    console.log("Event Location: " + response.data[0].venue.city);
                    var eventDateTime = moment(response.data[0].datetime);
                    console.log("Event Date & Time: " + eventDateTime.format("MM/DD/YYYY"));
                }
                else {
                    console.log("No results found.");
                }
            }
       )
       .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
}); 
}     ///end MovieThis
/////////////////////////////////////////////////////////////   
////*****      SEARCHING FOR MOVIE TITLES          **********/
/////////////////////////////////////////////////////////////

function movieThis() {

    console.log("i am in movies");

    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response) {
            if (response.data.Title != undefined) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("imdbRating:: " + response.data.imdbRating);
                console.log("Title: " + response.data.Title);
                console.log("Country:: " + response.data.Country);
                console.log("Language:: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("RottenTomatoes: " + response.data.tomatoRating);
            } 
            else {
                movieThis("Mr. Nobody");
            }
        }
    )
    .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
}); 
}     ///end MovieThis
//////////////////////////////////////////////////////////////////////   
////*****      SEARCHING FOR SONG INFO                      *********/
//////////////////////////////////////////////////////////////////////
function songThis(userInput) {
    spotify
    .search({ type: 'track', query: userInput })
    .then(function(response){
        if (response.tracks.total === 0) {
            errorConditionForSpotify();
        } else {
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Track: " + response.tracks.items[0].name);
            console.log("Preview URL: " + response.tracks.items[0].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);
        }
    }).catch(function (error) {  
        console.log(error);
        console.log("No Results found. Showing results for 'The Sign' by Ace of Base");
  });
}   
function errorConditionForSpotify() {
    spotify
    .search({ type: 'track', query: 'The Sign' })
    .then(function(response) {
        for (var i=0;i < response.tracks.items.length; i++) {
            if (response.tracks.items[i].artists[0].name === "Ace of Base") {
                console.log("Artist: " + response.tracks.items[i].artists[0].name);
                console.log("Track: " + response.tracks.items[i].name);
                console.log("Preview URL: " + response.tracks.items[i].preview_url);
                console.log("Album: " + response.tracks.items[i].album.name);
                i = response.tracks.items.length;
            }
        }
    }).catch(function (error) {  
        console.log(error);
        console.log("No Results found. ");
  });
}    //end Spotify Song Search

//////////////////////////////////////////////////////////////////////   
////*****      READ FILE AND DO WHAT IT SAYS                *********/
//////////////////////////////////////////////////////////////////////
function other1(){
    console.log("i am in other1 search which has file read")

    fs.readFile("random.txt", "utf8", function(error, data) {
        var dataArr = data.split(",");
            songThis(dataArr[1])
        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
    });
}



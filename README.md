# liri-node-app
### Purpose:
This is a command line App using __node.js__ .  Based on the command entered to run this app, it 
will display results at the command line:
* Concert information *  | (This app will  search for next concert info for Bands or Artists(venue and venue location,  date  )
* Songs information   *    | (Displays artist name, year, album and url with preview of song )
* Movie information   *     | (Displays Title, plot, actors, ratings, etc...)

### NPM Modules included:
* Spotify 
* request 
* moment  
* fs      
* axios   
* omdb    
* colors  

### Special Note for Spotify use
To use Spotify for Bands / Artist search,  all users will need to create their own __.env__
file:  You will need to use your own key and Secret ID.  in the .env file, add this and 
add your id:

#Spotify API keys

SPOTIFY_ID= *put key here*

SPOTIFY_SECRET=*put secred id here*

### Running the app:
At the terminal command line,  enter one of the following commands:
Command for search             | Purpose    |App used for Search
-------------------------------|-------------------------|--------------------------------
node liri.js spotify-this-song _songtitle_  | 'songtitle' is the song you want to see info for|Spotify
node liri.js concert-this _artistname_ | 'artistname' is the band or artist you want to  see next concert date and venue /location info  |Axios api and rest.bandsintown
node liri.js movie-this _moviename_    | 'moviename' is the title of the movie you want info for  | OMDB
node liri.js do-what-this-says  | This search reads file random.txt with a specific artist in it. If you want to change the default artist, open file and add new artist | Uses fs. node package.

i.e., At the terminal command line enter:        *node liri.js concert-this Pink*   

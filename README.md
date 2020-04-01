# liri-node-app
### Purpose:
This is a command line App using __node.js__ .  Based on the command entered to run this app, it 
will display results at the command line level:

* Concert information *  | (This cmd will search for next concert info for Bands or Artists(venue and venue location,  date  )
* Songs information   *    | (Displays artist name, year, album and url with preview of song )
* Movie information   *     | (Displays Title, plot, actors, ratings, etc...)
* do-what-this-says   * | (Reads a file to get artist name instead of getting name from cmd line. Artist name can be changed within the file)


### NPM Modules included liri.js and package-lock.json:
* Spotify 
* request 
* moment  
* fs      
* axios   
* omdb    
* colors  

### My Role:   I created app and documentation

### To Run App
The package-lock file has the apps and version needing to be npm installed.
To execute liri.js::

1. You must be at the directory level where you did the npm installs.
2. After installs, make sure you have updated  .env with your spotify key and id
3. Copy my keys.js  and random.txt files to your directory.
4. Run liri.js with one of the 4 commands listed in the table below.


### Special Note for Spotify use
To use Spotify for Bands / Artist search,  all users will need to create their own __.env__
file:  You will need to use your own key and Secret ID.  in the .env file, add this and 
add your id:

#Spotify API keys

SPOTIFY_ID= *put key here*

SPOTIFY_SECRET=*put secred id here*

### Running the app:
At the terminal command line,  enter ** one ** of the following commands:
Command for search             | Purpose    |App used for Search
-------------------------------|-------------------------|--------------------------------
node liri.js spotify-this-song _songtitle_  | 'songtitle' is the song you want to see info for|Spotify
node liri.js concert-this _bandname_  |'bandname' is the band or artist to search next concert info |Axios & rest.bandsintown
node liri.js movie-this _moviename_    | 'moviename' is the title of the movie you want info for  | OMDB
node liri.js do-what-this-says  | This search reads file random.txt with a specific artist in it. If you want to change the default artist, open file and add new artist | Uses fs. node package.

i.e., At the terminal command line enter:        
 *node liri.js concert-this Pink*   

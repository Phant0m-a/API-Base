API-BASE
------------------------

This project contains a variety of free to use api's available on internet & i will be doing the implementation of those using nodejs server 😎!

# UI update in near future!

## Please help & contribute to this small project!

# API LIST:
all implemented api's are available in ./routes/name_of_api

1.memeApi (Freemium) 

2.currency exchange (Free)

3.free-nba (Free)

4.RAWG-games api (Free)

5.music lyrics api

6.google translate api

7.donald trump jokes

8.Text to speech

9.shazam


Explaination of each api is written below instructions



## Instructions to use
open terminal "such as git bash in your desktop!"
create .env file and put host and key for individual api there! (i have also provided mine in each ./route/api)

1.  clone the repositery  using `git clone  'repositary-name-here'` 

2.  install dependencies  using `npm i`

3.  type ` npm run devStart ` This will start nodejs server on port `5000`

4.  in chrome browser type this URL `http://localhost:5000/`



# API LIST


1. memeApi:
    supports variety of endpoints

    go to ./routes/memeapi/memeapi.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


2. currencyApi:

  supports endpoints like,

  a. listquotes  url= /api/currencyexc/listquote

  b. exchange    url= /api/currencyexc/exchange

  go to ./routes/currencyexc/currencyexc.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


3. free NBA:
supports endpoints like,

  a. player  -get list of `all player` eg. url: https://free-nba.p.rapidapi.com/players

  b. id      -get `player` with that id eg. url: https://free-nba.p.rapidapi.com/players/id

  c. teams   -get `all teams` eg. url:https://free-nba.p.rapidapi.com/teams/

  d. id      -get `id team` with that id eg. url:https://free-nba.p.rapidapi.com/teams/`id`

  e. games   -get `all games` eg. url:https://free-nba.p.rapidapi.com/games

  f. id      -get `id game` with that id eg. url:https://free-nba.p.rapidapi.com/games/id

  functions:
      /list/:query
    query:
    {1. stats
    2. games
    3. teams
    4. players}

    replace with word query and it gives list of the certain option
    eg: /list/games*

      /query/:q/:id
    
    q:{1. teams
    2. players
    3. games}

    id: {id of item}

    eg: /query/players/14   {gives out data about the certain player}

  go to ./routes/freeNba/freeNba.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


4.RAWG-games api:

    this one has so, many api's which will take time to implement and write about
    meanwhile visit `https://rawg.io/apidocs` to get details about usage!

    a. games    -get list of all games with so much detals.

    go to ./routes/game/game.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


5.Chuck-norris api: (random joke generator)

      you can get random jokes with this

      a. random - get random jokes url : https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random

      b. categories - get categories url: https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories

      c.search - get search from those categories url:https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search with query set to   params: {query: 'animal'},//or any other type


      go to ./routes/chucknorris/chucknorris.js and there edit the url:  someaddress/{endpoint} eg address/{edit}
    
    usage:

    /category  - get category list
    /categroy/:cat  - get specific category jokes list
    /search/:id  - get joke by id



5.music-lyrics api:

      id= '16775' for artist: sia

      a. https://genius.p.rapidapi.com/artists/id/songs to get songs of certain artist
      
      b. https://genius.p.rapidapi.com/artists/search/id -to serach for certain artist add this below url... params: {q: 'Kendrick Lamar'},
      
      c. https://genius.p.rapidapi.com/artists/songs/id  -to get certain song with id 

      d. https://genius.p.rapidapi.com/artists/id     -to get certain artist with id


6.google translate api:
    this api has three functions,

    a. detect   - to detect language in which string is written
    b. language - returns numbers of lang supportted by api
    c. translate - takes source language and string -> returns string in  target laguage

    go to ./routes/google-translate/g-translate.js & looks for comments to edit details to mix it up


7.donald trump jokes:

      a. random  - returns random jokes https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote
      
      b. quotes_by_id  - give id and it will return joke. https://matchilling-tronald-dump-v1.p.rapidapi.com/quote/id

      c. tag - return joke tied to the tag https://matchilling-tronald-dump-v1.p.rapidapi.com/tag/%7Btag%7D || https://matchilling-tronald-dump-v1.p.rapidapi.com/tag/

      d. search  - search for a joke include url & params
        url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/search/quote',
      params: {size: '25', page: 'The page number', query: 'trump'},

    usage:
    /quote/:id search by id
    /quote-text/:id search by text (not working for now due to page number problem)
    /tag  get tags list
    /tag/:id search by id
    

8.Text to speech:

  This converts any text into speech!
    -can use get or post request simple! 


9.shazam:

    it has multiple function such as Identify any song. Discover, artists, lyrics, videos & playlists to create a song detector site/application such as shazam.com

    a.search

    b.auto-complete

    c.song {detect, top-track, recomendations, detect(2 versions), details, count}

    d.chart {list, track}

    usage:
    /  recommendations -  {in params we can add key of some sort}

    /search/:song search for song- {add song id of your choice to search on shazam!}

    /top-tracks/:artist top=track {search toptrack of an artist using artist id}

    /auto-complete/:song auto-complete {we can just tpye phrase of song and it will search for that on its own, add song text in :song}

    /get-count/:song get-count {it counts something i guess, replace song with id of Song}

    /list - LIST {get list of songs i guess}

    /chart -  {get chart of all popular songs}

    /get-detail/:id -get details {it gets broader details about the song}

    /detect/:song-data  detect {it can accept string of a song using some sort of speech to text then find the song}
    v2 is lil better!


    visit `https://rapidapi.com/collection/list-of-free-apis` for more details about these apis!
API-BASE
------------------------

This project contains a variety of free to use api's available on internet & i will be doing the implementation of those using nodejs server 😎!

## Please help & contribute to this small project!

# API LIST:
all implemented api's are available in ./routes/name_of_api
    1.memeApi (Freemium)
    2.currency exchange (Free)
    3.free-nba (Free)
    4.RAWG-games api (Free)
    nextup is 
        chuck norris api!
        music lyrics api!


Explaination of each api is written below instructions



## Instructions to use
open terminal "such as git bash in your desktop!"
    create .env file and put host and key for individual api there! (i have also provided mine in each ./route/api)
1.  clone the repositery  using " `git clone  'repositary-name-here'` "
2.  install dependencies  using "` npm i `"
3.  type "` npm run devStart `" This will start nodejs server on port 5000
4.  in chrome browser type this URL` http://localhost:5000/`


1. memeApi:
    supports variety of endpoints

    go to ./routes/memeapi/memeapi.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


2. currencyApi:
    supports endpoints like,
    a. listquotes
    b. exchange
    go to ./routes/currencyexc/currencyexc.js and there edit the url:  someaddress/{endpoint} eg address/listquotes

3. free NBA:
    supports endpoints like,
    a. player  -get list of `all player` eg. url: https://free-nba.p.rapidapi.com/players
    b. id      -get `player` with that id eg. url: https://free-nba.p.rapidapi.com/players/id
    c. teams   -get `all teams` eg. url:https://free-nba.p.rapidapi.com/teams/
    d. id      -get `id team` with that id eg. url:https://free-nba.p.rapidapi.com/teams/`%7'Bid'%7D`
    e. games   -get `all games` eg. url:https://free-nba.p.rapidapi.com/games
    f. id      -get `id game` with that id eg. url:https://free-nba.p.rapidapi.com/games/id

     go to ./routes/freeNba/freeNba.js and there edit the url:  someaddress/{endpoint} eg address/listquotes

4.RAWG-games api:
   this one has so, many api's which will take time to implement and write about
   meanwhile visit `https://rawg.io/apidocs` to get details about usage!
   a. games    -get list of all games with so much detals.

   go to ./routes/game/game.js and there edit the url:  someaddress/{endpoint} eg address/listquotes


visit `https://rapidapi.com/collection/list-of-free-apis` for more details about these apis!
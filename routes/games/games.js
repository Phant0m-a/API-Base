
const express = require('express');
const gamesRouter = express.Router();



gamesRouter.get("/", async (req, res) => {

    try {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://api.rawg.io/api/games?key=eabdf35946f44728873f5fdbcd7315fa&dates=2019-09-01,2019-09-30&platforms=18,1,7',
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key:'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
                
              
            },
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

module.exports = gamesRouter;
const express = require('express');
const nbaRouter = express.Router();



nbaRouter.get("/", async (req, res) => {

    try {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: { page: '0', per_page: '25' },
            headers: {
                //please create your own api i left my own so you could test it easily!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
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

module.exports = nbaRouter;
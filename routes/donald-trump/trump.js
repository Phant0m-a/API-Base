

const express = require('express');
const trumpRouter = express.Router();



trumpRouter.get("/", async (req, res) => {

    try {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
            headers: {
                Accept: 'application/hal+json',
                // please use your own api keys. mine are here so u dont have to get into fuzz of configureing!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

module.exports = trumpRouter;
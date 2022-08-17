const express = require('express');
const gTranslateRouter = express.Router();



gTranslateRouter.get("/", async (req, res) => {

    try {
        const axios = require("axios");

        const encodedParams = new URLSearchParams();
        //1a. for translateion from source , to target and q text to convert
        encodedParams.append("q", "Comment ça va");
        encodedParams.append("target", "en");
        encodedParams.append("source", "fr");

        //2. if no encoded params are used then it will return all the languages supported

        //3. use this to detect certain language  
        // const encodedParams = new URLSearchParams();
        // encodedParams.append("q", "hello man use your own api keys please");

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                //please use your own keys, i am leaving these here so you could easily test it out!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            //1b. put encodedparams in data
            data: encodedParams
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data);
        }).catch(function (error) {
            console.error(error);
        });


    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

module.exports = gTranslateRouter
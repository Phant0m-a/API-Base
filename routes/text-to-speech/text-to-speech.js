

const express = require('express');
const path = require('path');
const textspeechRouter = express.Router();



textspeechRouter.get("/", async (req, res) => {

    try {

        const axios = require("axios");

const encodedParams = new URLSearchParams();
//source string
encodedParams.append("src", "Hello world");

encodedParams.append("hl", "en-us");
//speed rate
encodedParams.append("r", "0");
//extension 
encodedParams.append("c", "mp3");
// bit rate
encodedParams.append("f", "16khz_16bit_mono");

const options = {
  method: 'POST',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  //use your own key
  params: {key: '2621446e80894ff89a7b79769cba0202'},
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    //use your own api key !
    'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
    console.log('returning output!');
    // let file = path.
    
	res.send(response.data);
}).catch(function (error) {
	console.error(error);
});
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

module.exports = textspeechRouter;
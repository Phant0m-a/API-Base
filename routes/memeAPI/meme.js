const express = require('express');
const memeRouter = express.Router();



memeRouter.get("/", async (req, res) => {
  try {
    const request = require('request');

    const options = {
      method: 'GET',
      url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
      qs: {
        top: 'Top Text',
        bottom: 'Bottom Text',
        meme: 'Condescending-Wonka',
        font_size: '50',
        font: 'Impact'
      },
      headers: {
        //please create your own api i left my own so you could test it easily!
        'X-RapidAPI-Key': process.env.memeKEY || '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': process.env.memeHOST || 'ronreiter-meme-generator.p.rapidapi.com',
        useQueryString: true
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);


      res.status(200).send(body);
    });

  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});

module.exports = memeRouter;
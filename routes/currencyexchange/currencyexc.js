const express = require('express');
const currencyexcRouter = express.Router();



currencyexcRouter.get("/", async (req, res) => {

  try {
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/exchange',
      headers: {

        //please create your own api i left my own so you could test it easily!
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      res.json({success:true, message:response.data});
    }).catch(function (error) {
      console.error(error);
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});



//list quotes
currencyexcRouter.get('/list', async (req, res) => {
  try {

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/listquotes',
      headers: {

        //please create your own api i left my own so you could test it easily!
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      res.json({success:true, message:response.data});
    }).catch(function (error) {
      console.error(error);
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
})



//exchange
// currencyexcRouter.get('/exchange', async (req, res) => {
//   try {



//   } catch (err) {
//     res.status(401).send({ success: false, message: err });
//   }


// })

module.exports = currencyexcRouter;
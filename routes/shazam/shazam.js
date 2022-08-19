const express = require('express');
const shazamRouter = express.Router();



shazamRouter.get("/", async (req, res) => {

    try {


        // 
        const axios = require("axios");

const options = {
  method: 'GET',

  //search
  url: 'https://shazam.p.rapidapi.com/search',
  params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},

//key is id of song

  // auto-complete
  // url: 'https://shazam.p.rapidapi.com/auto-complete',
  //params: {term: 'kiss the', locale: 'en-US'},

  // top-track
  //  url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
  // params: {id: '40008598', locale: 'en-US'},

  //detect: 
  //includes params and datastream

  //list-reccomendations
  //  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  // params: {key: '484129036', locale: 'en-US'},

  //get-details
  //url: 'https://shazam.p.rapidapi.com/songs/get-details',
  // params: {key: '40333609', locale: 'en-US'},

  //get-count:  
  // url: 'https://shazam.p.rapidapi.com/songs/get-count',
  // params: {key: '40333609'},


  // list
  // url: 'https://shazam.p.rapidapi.com/charts/list',

  //track
  //  url: 'https://shazam.p.rapidapi.com/charts/track',
  // params: {locale: 'en-US', pageSize: '20', startFrom: '0'},

  headers: {
    //sign in to rapid api to get acces to keys
    'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
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

module.exports = shazamRouter;
const express = require('express');
const shazamRouter = express.Router();
const axios = require("axios");


// recommendations
shazamRouter.get("/", async (req, res) => {

    try {


        // 
        
        const options = {
          method: 'GET',
          url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
          params: {key: '484129036', locale: 'en-US'},
          headers: {
            'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          }
        };

axios.request(options).then(function (response) {

    res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
    res.status(401).send({ success: false, message: err });
}
});


//search song
shazamRouter.get("/search/:song", async (req, res) => {

  try {


      // 
      let song = req.params.song;
      
const options = {
method: 'GET',

// set limit : for now its default to 5
//search
url: 'https://shazam.p.rapidapi.com/search',
params: {term: song, locale: 'en-US', offset: '0', limit: '5'},

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
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//list-artist-top-track
shazamRouter.get("/top-tracks/:song", async (req, res) => {

  try {


      // 
      let song = req.params.song;
      
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
        params: {id: song, locale: 'en-US'},
        headers: {
          'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//auto-complete
shazamRouter.get("/auto-complete/:song", async (req, res) => {

  try {


      // 
      let song = req.params.song;
      
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/auto-complete',
        params: {term: song, locale: 'en-US'},
        headers: {
          'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//get count of song
shazamRouter.get("/get-count/:song", async (req, res) => {

  try {


      // 
      let song = req.params.song;
      
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-count',
        //'40333609' song id
        params: {key: song},
        headers: {
          'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//list
shazamRouter.get("/list", async (req, res) => {

  try {


    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/list',
      headers: {
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


// get chart of all popular songs
shazamRouter.get("/chart", async (req, res) => {

  try {


    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/track',
      //you can change pagesize or start from
      params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
      headers: {
        //man use your own keys!
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//Get details information of specific song
shazamRouter.get("/get-detail/:id", async (req, res) => {

  try {
    let id = req.params.id;

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/songs/get-details',
      //you can change locale too!
      params: {key:id, locale: 'en-US'},
      headers: {
        //use your own keys please!
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//detect - song
shazamRouter.get("/detect/:song-data", async (req, res) => {

  try {
    let song = req.params.song-data;

    const options = {
      method: 'POST',
      url: 'https://shazam.p.rapidapi.com/songs/detect',
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      },
      //should be text or specch to text converted
      data: song
    };

axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});


//detect V2 - song
shazamRouter.get("/detect-v2/:song-data", async (req, res) => {

  try {
    let song = req.params.song-data;

    const options = {
      method: 'POST',
      url: 'https://shazam.p.rapidapi.com/songs/v2/detect',
      params: {timezone: 'America/Chicago', locale: 'en-US'},
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      },
      //should be text or specch to text converted
      data: song
    };

axios.request(options).then(function (response) {
console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
res.send(error);
});


} catch (err) {
  res.status(401).send({ success: false, message: err });
}
});



module.exports = shazamRouter;
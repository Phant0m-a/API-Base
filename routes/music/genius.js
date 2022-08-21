const express = require('express');
const musicRouter = express.Router();
const axios = require("axios");

// give main page songs collection!
musicRouter.get('/', async (req,res)=>{
  try {
    
    const options = {
      method: 'GET',
      url: `https://genius.p.rapidapi.com/artists/16775/songs`,
   //gets you singers
      //eg id:16775
      //artists/id  
      //https://genius.p.rapidapi.com/artists/id/songs to get songs of certain artist
      // https://genius.p.rapidapi.com/artists/search/id -to serach for certain artist
      //https://genius.p.rapidapi.com/artists/songs/id  -to get certain song with id
      //   
      //please use your own api keys !
      headers: {
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {

      // let data = response.data;
      // for (let i = 0; i < 1; i++) {
      //     console.log(data.response.songs[0].primary_artist.name);

      // }
      res.json(response.data);
    }).catch(function (error) {

      res.status(401).send({ success: false, message: error });
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});


// musicRouter.get("/:id", async (req, res) => {

//   try {
//     let id = req.params.id? req.params.id: 16775;
//     const options = {
//       method: 'GET',
//       url: `https://genius.p.rapidapi.com/artists/${id}/songs`,
   
//       //eg id:16775
//       //artists/id  
//       //https://genius.p.rapidapi.com/artists/id/songs to get songs of certain artist
//       // https://genius.p.rapidapi.com/artists/search/id -to serach for certain artist
//       //https://genius.p.rapidapi.com/artists/songs/id  -to get certain song with id
//       //   
//       //please use your own api keys !
//       headers: {
//         'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
//         'X-RapidAPI-Host': 'genius.p.rapidapi.com'
//       }
//     };

//     axios.request(options).then(function (response) {

//       // let data = response.data;
//       // for (let i = 0; i < 1; i++) {
//       //     console.log(data.response.songs[0].primary_artist.name);

//       // }
//       res.json(response.data);
//     }).catch(function (error) {
//       console.error(error);
//       res.status(401).send({ success: false, message: error });
//     });
//   } catch (err) {
//     res.status(401).send({ success: false, message: err });
//   }
// });


musicRouter.get("/artists/:id", async (req, res) => {
//this gets you specific singer info
  try {
    let id = req.params.id;

    const options = {
      method: 'GET',
      url: `https://genius.p.rapidapi.com/artists/${id}`,
   
      //eg id:16775
      //please use your own api keys !
      headers: {
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (error) {
      res.status(401).send({ success: false, message: error });
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});


musicRouter.get("/songs/:id", async (req, res) => {
//eg:2227078
//gets you specific song
  try {
    let id = req.params.id;

    const options = {
      method: 'GET',
      url: `https://genius.p.rapidapi.com/songs/${id}`,
      
      //eg id:16775
      //please use your own api keys !
      headers: {
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (error) {
      res.status(401).send({ success: false, message: error });
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});


musicRouter.get("/search/:singer", async (req, res) => {
  //eg:222700
  //gets you songs related to that singer
  try {
    let singer = req.params.singer; 
    const options = {
      method: 'GET',
      url: `https://genius.p.rapidapi.com/search`,
        params: {q: singer},
      //eg id:16775
      //please use your own api keys !
      headers: {
        'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (error) {
      res.status(401).send({ success: false, message: error });
    });
  } catch (err) {
    res.status(401).send({ success: false, message: err });
  }
});

module.exports = musicRouter;

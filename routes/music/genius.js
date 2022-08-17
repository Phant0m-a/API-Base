const express = require('express');
const musicRouter = express.Router();



musicRouter.get("/", async (req, res) => {

    try {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/artists/16775/songs',
//   params: {q: 'Kendrick Lamar'},
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
	console.error(error);
});
} catch (err) {
    res.status(401).send({ success: false, message: err });
}
});

module.exports = musicRouter;

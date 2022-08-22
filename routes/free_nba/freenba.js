const express = require('express');
const nbaRouter = express.Router();
 const axios = require("axios");
const { response } = require('express');



nbaRouter.get("/", async (req, res) => {

    try {
    

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
          
            res.json(response.data)
        }).catch(function (error) {
            res.send(error);
        });

    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
    
});



nbaRouter.get("/list/:q", async (req, res) => {


    try {
    
        let query = req.params.q ? req.params.q : 'teams';
       
        await getData(query,req,res)

    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
    
});



nbaRouter.get("/query/:q/:id", async (req, res) => {


    try {
        let id = req.params.id;
        let query = req.params.q;
       
        const axios = require("axios");

        const options = {
          method: 'GET',
          url: `https://free-nba.p.rapidapi.com/${query}/${id}`,
          headers: {
            'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
            res.send(response.data);
        }).catch(function (error) {
           res.send(error);
        });

    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
    
});



async function getData(query,req,res){
    const options = {
        method: 'GET',
        url: `https://free-nba.p.rapidapi.com/${query}`,
        params: {page: '0', per_page: '25'},
        headers: {
          'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    }
    axios.request(options).then(function (response) {
     
        res.send(response.data);
    }).catch(function (error) {
       res.send(error);
    });
   
}




module.exports = nbaRouter;
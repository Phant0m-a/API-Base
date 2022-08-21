const express = require('express');
const chucknorrisRouter = express.Router();
const axios = require("axios");


chucknorrisRouter.get("/", async (req, res) => {

    try {
   
        let option = 'random';
        // can be set to
        //random 
        //categorries
        //search
        const options = {
            method: 'GET',
            url: `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/${option}`,

            headers: {
                accept: 'application/json',
                //please create your own api i left my own so you could test it easily!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            res.status(401).send({ success: false, message: error });
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


chucknorrisRouter.get("category/:category", async (req, res) => {

    try {
     
        let option = req.params.category ? req.params.category:'random';
  
        const options = {
            method: 'GET',
            url: `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/${option}`,

            headers: {
                accept: 'application/json',
                //please create your own api i left my own so you could test it easily!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            res.status(401).send({ success: false, message: error });
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


chucknorrisRouter.get("search/:id", async (req, res) => {

    try {
     
        let option = req.params.id ? req.params.id:'career';
       
        const options = {
            method: 'GET',
            url: `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search`,
            params:{query:option},

            headers: {
                accept: 'application/json',
                //please create your own api i left my own so you could test it easily!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            res.status(401).send({ success: false, message: error });
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


module.exports = chucknorrisRouter;
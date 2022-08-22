

const express = require('express');
const trumpRouter = express.Router();
const axios = require("axios");



trumpRouter.get("/", async (req, res) => {

    try {
    
        const options = {
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
            headers: {
                Accept: 'application/hal+json',
                // please use your own api keys. mine are here so u dont have to get into fuzz of configureing!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
            res.send(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//quote serach by text
trumpRouter.get("/quote-text/:query", async (req, res) => {

    try {
        let query = req.params.query;
        const options = {
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/search/quote',
            params: {size: '25', page: 'The page number', query: `${query}`},
            //fix the page number problem!
            headers: {
              accept: 'application/hal+json',
              'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
              'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
           res.send(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//quote by id
trumpRouter.get("/quote/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const options = {
            method: 'GET',
            url: `https://matchilling-tronald-dump-v1.p.rapidapi.com/quote/${id}`,
            headers: {
              accept: 'application/hal+json',
              'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
              'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
           res.send(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


trumpRouter.get("/tag", async (req, res) => {

    try {
    
        const options = {
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/tag',
            headers: {
                Accept: 'application/hal+json',
                // please use your own api keys. mine are here so u dont have to get into fuzz of configureing!
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
            res.send(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});



trumpRouter.get("/tag/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const options = {
            method: 'GET',
            url: `https://matchilling-tronald-dump-v1.p.rapidapi.com/tag/${id}`,
            headers: {
            
              'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
              'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
           res.send(response.data);
        }).catch(function (error) {
           res.send(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

module.exports = trumpRouter;
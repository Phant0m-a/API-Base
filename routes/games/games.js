
const express = require('express');
const gamesRouter = express.Router();
const axios = require("axios");

// we can also add ability to add filters for platforms and date and time with &filter 
//more on it in future 

// games list
gamesRouter.get("/", async (req, res) => {

    try {

        const options = {
            method: 'GET',
            url: 'https://api.rawg.io/api/games?key=eabdf35946f44728873f5fdbcd7315fa&dates=2019-09-01,2019-09-30&platforms=18,1,7',
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'


            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games detail
gamesRouter.get("/details/:id", async (req, res) => {

    try {
        let id = req.params.id;

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/games/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'


            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games genres
gamesRouter.get("/genres", async (req, res) => {

    try {


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/genres?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games genres details
gamesRouter.get("/genres-details/:id", async (req, res) => {

    try {
        let id = req.params.id;

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/genres/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'


            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games platform details
gamesRouter.get("/platform-details/:id", async (req, res) => {

    try {
        let id = req.params.id;

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/platforms/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games platform
gamesRouter.get("/platform", async (req, res) => {

    try {

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/platforms?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games publishers
gamesRouter.get("/publishers", async (req, res) => {

    try {


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/publishers?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games publishers details
gamesRouter.get("/publishers-details/:id", async (req, res) => {

    try {
        let id = req.params.id;

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/publishers/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});

//
//games stores
gamesRouter.get("/stores", async (req, res) => {

    try {

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/stores?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games stores details
gamesRouter.get("/stores-details/:id", async (req, res) => {

    try {
        let id = req.params.id;


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/stores/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//
//games tags
gamesRouter.get("/tags", async (req, res) => {

    try {


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/tags?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games tags details
gamesRouter.get("/tags-details/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/tags/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//
//games developers
gamesRouter.get("/developers", async (req, res) => {

    try {


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/developers?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games developers details
gamesRouter.get("/developers-details/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/developers/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//
//games creators
gamesRouter.get("/creators", async (req, res) => {

    try {


        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/creators?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games creators details
gamesRouter.get("/creators-details/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/creators/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});


//games creators roles   job related
gamesRouter.get("/creator-roles/:id", async (req, res) => {

    try {
        let id = req.params.id;
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/creator-roles/${id}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
});




//test function
async function getData(cat, req, res) {

    try {
        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/${cat}?key=eabdf35946f44728873f5fdbcd7315fa`,
            headers: {
                //please create your own api key, i left my own so you could test it easily!
                Key: 'eabdf35946f44728873f5fdbcd7315fa',
                'X-RapidAPI-Key': '48a3a76e27mshd2769ef34d9a0dep1851f9jsnfb2975d32821',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

            },

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    } catch (err) {
        res.status(401).send({ success: false, message: err });
    }
}

module.exports = gamesRouter;
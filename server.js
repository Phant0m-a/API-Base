const express = require('express');
const env = require('dotenv');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

const memeRouter = require('./routes/memeAPI/meme');
const currencyexcRouter = require('./routes/currencyexchange/currencyexc');
const freenbaRouter = require('./routes/free_nba/freenba');
const gamesRouter = require('./routes/games/games');
const chucknorrisRouter = require('./routes/chucknorris/chucknorris');
const musicRouter = require('./routes/music/genius');
const gTranslateRouter = require('./routes/google-translate/g-translate');
const trumpRouter = require('./routes/donald-trump/trump');
const textspeechRouter = require('./routes/text-to-speech/text-to-speech');

// index page can receive some makeover
app.get('/', (req,res)=>{
    res.render('index');
});

// api list!😁
app.use("/api/memeApi", memeRouter);
app.use("/api/currencyexc", currencyexcRouter);
app.use("/api/freeNBA", freenbaRouter);
app.use("/api/games", gamesRouter);
app.use("/api/chuck", chucknorrisRouter);
app.use("/api/music", musicRouter);
app.use("/api/translator", gTranslateRouter);
app.use("/api/trump", trumpRouter);
app.use("/api/textTospeech", textspeechRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('[+] Server restarted succesfully😎');
});
const express = require('express');
const env = require('dotenv');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

const memeRouter = require('./routes/memeAPI/meme');
const currencyexcRouter = require('./routes/currencyexchange/currencyexc');

app.get('/', (req,res)=>{
    res.render('index');
});

app.use("/api/memeApi", memeRouter);
app.use("/api/currencyexc", currencyexcRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('[+] Server restarted succesfully😎');
});
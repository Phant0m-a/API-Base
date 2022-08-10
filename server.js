const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

const memeRouter = require('./routes/memeAPI/meme');

app.get('/', (req,res)=>{
    res.render('index');
});

app.use("/api/memeApi", memeRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('[+] Server restarted succesfully😎');
});
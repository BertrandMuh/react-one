const express = require('express');
const axios = require('axios');
const cors = require('cors')


require('dotenv').config()

const app = express()
app.use(cors({
    origin: '*'
}));

app.get('/get_movie/:movieString', async (req, res) => {
    console.log(req.params.movieString);
    let apiResponse = await axios(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    console.log(apiResponse.data);
    res.json(apiResponse.data)
})

app.get('/get_ten_random_movies', async (req, res) => {
    let apiResponse = await axios(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}`);
    res.json(apiResponse)
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})
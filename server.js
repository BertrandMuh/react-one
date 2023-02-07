const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path')


require('dotenv').config()

const app = express()
app.use(cors('*/*'));

// SERVE THE REACT APP FROM SERVER
app.use(express.static(path.join(__dirname, 'build')))

app.get('/get_movie/:movieString', async (req, res) => {
    console.log(req.params.movieString);
    let apiResponse = await axios(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    res.json(apiResponse.data)
})

app.get('/get_ten_random_movies', async (req, res) => {
    let apiResponse = await axios(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}`);
    res.json(apiResponse)
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})
const express = require('express');
const router = express.Router(); 
const Movie = require('../models/Movie.model');

//list of all movies
router.get('/movies', async(req, res, next)=>{

    try{
        const allMovies = await Movie.find(); 
        res.render('movies/movies-list', {movies: allMovies}); 

    }catch(error){
        console.log("Error occurred", error); 
        next(error); 
    }
    
});

router.get('/movies/:movieId', async (req, res, next)=>{
    try{

    const {movieId} = req.params; 

    const movie = await Movie.findById(movieId);
    res.render('movies/movie-details', movie); 

    }catch(error){
        next(error);
    }
})

module.exports = router; 
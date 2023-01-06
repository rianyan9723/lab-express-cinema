const {Schema, model} = require('mongoose');

const movieSchema = new Schema ({
    title : String,
    director: String,
    stars: enum[],
    description: String, 
    showtimes: ,
}, 
);


const Movie = model('movie', movieSchema);

module.exports = Movie; 
import Movie from "../models/Movie.js"; 

const getById = function(id) { 
    const movie = Movie.findById(id).lean(); 

    return movie; 
}; 

const getByIdWithCast = function(id) {
    const movie = Movie.findById(id).populate('casts').lean(); 

    // console.log(movie); 

    return movie; 
}; 

const getAll = function() { 
    return Movie.find({}).lean(); 
}; 

const create = function(movie) { 
    return Movie.create(movie); 
}; 

const update = function(movie, id) {
    return Movie.findOneAndUpdate({ _id: id }, movie); 
}; 

const attachCast = async function(movieId, castId) { 
    const movie = await Movie.findById(movieId); 
    movie.casts.push(castId); 
    return movie.save(); 
}; 

export default { getById, getByIdWithCast, getAll, create, update, attachCast }; 

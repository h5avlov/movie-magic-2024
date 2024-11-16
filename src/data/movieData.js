import Movie from "../models/Movie.js"; 

const getById = function(id) { 
    const movie = Movie.findById(id).lean(); 

    return movie; 
}; 

const getAll = function() { 
    return Movie.find({}).lean(); 
}; 

const create = function(movie) { 
    return Movie.create(movie); 
}; 

export default { getById, getAll, create }; 

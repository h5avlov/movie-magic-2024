import movieData from "../data/movieData.js"; 

const getAll = async function() {
    const movies = movieData.getAll(); 

    return movies; 
};  

const getById = async function(id) {
    const movie = await movieData.getById(id); 

    return movie; 
}; 

const getByIdWithCast = async function(id) {
    const movie = await movieData.getByIdWithCast(id); 

    return movie; 
} 

const create = function(movie) { 
    return movieData.create(movie); 
}; 

const update = function(movie, id) { 
    return movieData.update(movie, id); 
}; 

const attachCast = function(movieId, castId) { 
    return movieData.attachCast(movieId, castId); 
}; 

export default { getAll, getById, getByIdWithCast, create, update, attachCast }; 

import movieData from "../data/movieData.js"; 

const getAll = async function() {
    const movies = movieData.getAll(); 

    return movies; 
} 

const getById = async function(id) {
    const movie = await movieData.getById(id); 

    return movie; 
} 

const create = function(movie) { 
    return movieData.create(movie); 
}; 

export default { getAll, getById, create }; 

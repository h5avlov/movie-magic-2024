import movieData from "../data/movieData.js"; 

const getAll = async function() {
    const movies = await movieData.getAll(); 

    return movies; 
} 

const getById = async function(id) {
    const movie = await movieData.getById(id); 

    return movie; 
} 

const create = async function(movie) { 
    await movieData.create(movie); 
}; 

export default { getAll, getById, create }; 
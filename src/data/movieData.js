import fs from "fs/promises"; 
import uniqid from "uniqid"; 

const dbPath = './src/db.json'; 

const getDb = async function() { 
    const data = await fs.readFile(dbPath, {encoding: 'utf-8'}); 
    const json = JSON.parse(data); 

    return json; 
}; 

const saveDb = async function(movie) {
    const json = await getDb(); 
    json.push(movie); 
    await fs.writeFile(dbPath, JSON.stringify(json, null, 2)); 
}; 

const updateDb = async function(movies) {
    await fs.writeFile(dbPath, JSON.stringify(movies, null, 2)); 
}; 

const getById = async function(id) { 
    const movies = await getDb(); 
    const movie = movies.find((m) => m.id === id); 

    return movie; 
}; 

const getAll = async function() {
    return await getDb(); 
}; 

const create = async function(movie) { 
    movie.id = uniqid(); 

    await saveDb(movie); 
}; 

const remove = async function(id) { 
    let movies = await getDb(); 
    movies = movies.filter((m) => { 
        m.id !== id 
    }); 

    await updateDb(movies); 
}; 

const update = async function(id, movie) { 
    const movies = await getDb(); 
    const entity = movies.find(m => m.id == id); 
    
    entity.title = movie.title; 
    entity.genre = movie.genre; 
    entity.director = movie.director; 
    entity.year = movie.year; 
    entity.description = movie.description; 

    updateDb(movies); 
}; 

export default { getById, getAll, create, update }; 

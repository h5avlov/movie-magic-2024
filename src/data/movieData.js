import fs from "fs/promises"; 

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

const getById = async function(id) { 
    const movies = await getDb(); 
    const movie = movies.find((m) => m.id === id); 

    return movie; 
}; 

const getAll = async function() {
    return await getDb(); 
}; 

const create = async function(movie) { 
    await saveDb(movie); 
}; 

export default { getById, getAll, create }; 

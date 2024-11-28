import Cast from "../models/Cast.js"; 

const create = function(cast) {
    return Cast.create(cast); 
}; 

const update = async function(id, cast) { 
    const c = await Cast.findById(id); 

    c.name = cast.name; 
    c.age = cast.age; 
    c.born = cast.born; 
    c.imageUrl = cast.imageUrl; 

    c.save(); 
}; 

const getById = function(id) { 
    return Cast.findById(id); 
}; 

const getAll = function() {
    return Cast.find(); 
}; 

export default { create, update, getById, getAll }; 

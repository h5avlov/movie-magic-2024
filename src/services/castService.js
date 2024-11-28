import castData from "../data/castData.js"; 

const create = function(cast) {
    return castData.create(cast); 
}; 

const update = function(id, cast) { 
    return castData.update(id, cast); 
}; 

const getById = function(id) { 
    return castData.findById(id); 
}; 

const getAll = function() {
    return castData.getAll(); 
}; 

export default { create, update, getById, getAll }; 
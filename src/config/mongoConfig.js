import { connect } from "mongoose"; 

const dbUrl = 'mongodb://localhost:27017/movie_magic'; 

const mongoConfig = async function() {
    try {
        await connect(dbUrl); 
        console.log('DB connection working'); 
    } catch (error) {
        console.log('Error connectiong to DB: ' + error.message);  
    } 
}; 

export default mongoConfig; 

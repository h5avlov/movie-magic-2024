import { model, Schema, Types } from "mongoose"; 

const movieSchema = new Schema({ 
    title: String, 
    genre: String, 
    director: String, 
    year: Number, 
    rating: Number, 
    image: String, 
    description: String, 
    casts: [{
        type: Types.ObjectId, 
        ref: 'Cast' 
    }]
}); 

const Movie = model('Movie', movieSchema); 

export default Movie; 

import express from 'express'; 
import { getAll, getById } from "../data/movieData.js"; 

const router = express.Router(); 

router.get('/', async (req, res) => { 
    const movies = await getAll(); 
    res.render('home', { movies }); 
}); 

router.get('/about', (req, res) => {
    res.render('home/about'); 
}); 

router.get('/get/:id', async (req, res) => { 
    const id = req.params.id; 
    const movie = await getById(id); 

    res.send(movie); 
}); 

export { router as homeControllerRouter }; 

import { Router } from "express"; 
import movieService from "../services/movieService.js"; 
import uniqid from 'uniqid'; 

const router = Router(); 

router.get('/details/:id', async (req, res) => { 
    const id = req.params.id; 
    const movie = await movieService.getById(id); 

    res.render('movie/details', { movie }); 
}); 

router.get('/create', (req, res) => {
    res.render('movie/create'); 
}); 

router.post('/create', async (req, res) => { 
    const movie = req.body; 
    
    movie.id = uniqid(); 

    await movieService.create(movie); 

    res.redirect(`/movies/details/${movie.id}`); 
});  

export { router as movieControllerRouter }; 
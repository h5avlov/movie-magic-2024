import { Router } from "express"; 
import movieService from "../services/movieService.js";  

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

    await movieService.create(movie); 

    res.redirect(`/movies/details/${movie.id}`); 
});  

// router.get('/update/:id', async (req, res) => { 
//     const id = req.params.id; 
//     const movie = await movieService.getById(id); 

//     res.render('movie/update', movie); 
// }); 

// router.post('/update/:id', async (req, res) => { 
//     const movie = req.body; 
//     const id = req.params.id; 

//     await movieService.update(id, movie); 

//     res.redirect(`/movies/details/${id}`); 
// }); 

export { router as movieControllerRouter }; 

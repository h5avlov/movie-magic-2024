import { Router } from "express"; 
import movieService from "../services/movieService.js"; 
import castService from "../services/castService.js"; 

const router = Router(); 

router.get('/details/:id', async (req, res) => { 
    const id = req.params.id; 
    const movie = await movieService.getByIdWithCast(id); 

    res.render('movie/details', { movie }); 
}); 

router.get('/create', (req, res) => {
    res.render('movie/create'); 
}); 

router.post('/create', async (req, res) => { 
    const movie = req.body; 

    const m = await movieService.create(movie); 

    res.redirect(`/movies/details/${m._id}`); 
});  

router.get('/update/:id', async (req, res) => { 
    const movieId = req.params.id; 
    const movie = await movieService.getById(movieId); 

    res.render('movie/update', { movie }); 
}); 

router.post('/update/:id', async (req, res) => { 
    const id = req.params.id; 
    const movie = req.body; 

    const m = await movieService.update(movie, id); 

    res.redirect(`/movies/details/${m._id}`); 
}); 

router.get('/:id/attach-cast', async (req, res) => { 
    const movie = await movieService.getById(req.params.id); 
    const casts = await castService.getAll().lean(); 

    res.render('cast/attach', { movie, casts }); 
}); 

router.post('/:id/attach-cast', async (req, res) => { 
    const movieId = req.params.id; 
    const castId = req.body.cast; 
    await movieService.attachCast(movieId, castId); 

    res.redirect(`/movies/details/${movieId}`); 
});

export { router as movieControllerRouter }; 

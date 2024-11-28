import { Router } from "express"; 
import castService from "../services/castService.js"; 
import castData from "../data/castData.js";

const router = Router(); 

router.get('/create', (req, res) => { 
    res.render('cast/create'); 
}); 

router.post('/create', async (req, res) => { 
    const cast = req.body; 
    const c = await castService.create(cast); 

    res.redirect('/'); 
}); 

router.get('/:id/update', async (req, res) => { 
    const id = req.params.id; 
    const cast = await castData.getById(id); 

    console.log(cast); 

    res.render('cast/update', cast); 
}); 

router.post('/:id/update', async (req, res) => { 
    const id = req.params.id; 
    const cast = req.body; 

    await castService.update(id, cast); 

    res.redirect('/'); 
}); 

export { router as castControllerRouter }; 

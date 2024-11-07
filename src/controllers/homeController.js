import express from 'express'; 

const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('home', { movies }); 
}); 

router.get('/about', (req, res) => {
    res.render('home/about'); 
}); 

export { router as homeControllerRouter }; 

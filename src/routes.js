import express from 'express'; 
import { homeControllerRouter } from './controllers/homeController.js'; 
import { movieControllerRouter } from './controllers/movieController.js';

const router = express.Router(); 

router.use(homeControllerRouter); 
router.use('/movies', movieControllerRouter); 

export default router; 

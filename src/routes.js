import express from 'express'; 
import { homeControllerRouter } from './controllers/homeController.js'; 
import { movieControllerRouter } from './controllers/movieController.js';
import { castControllerRouter } from './controllers/castController.js';

const router = express.Router(); 

router.use(homeControllerRouter); 
router.use('/movies', movieControllerRouter); 
router.use('/casts', castControllerRouter); 

export default router; 

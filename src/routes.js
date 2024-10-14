import express from 'express'; 
import homeController from './controllers/homeController.js'; 

const router = express.Router(); 

router.use(homeController); 

export default router; 

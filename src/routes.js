import express from 'express'; 
import { homeControllerRouter } from './controllers/homeController.js'; 

const router = express.Router(); 

router.use(homeControllerRouter); 

export default router; 

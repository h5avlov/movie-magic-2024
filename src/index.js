
import express from 'express'; 
import handlebars from 'express-handlebars'; 
import router from './routes.js'; 

const app = express(); 
const port = 5000; 

// View Engine 
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
})); 
app.set('view engine', 'hbs'); 
app.set('views', 'src/views'); 

// Static Route 
app.use(express.static('public')); 

app.use(express.urlencoded({extended: false})); 

// Routes 
app.use(router); 

// Server 
app.listen(port, () => {
    console.log("App listening on port " + port);  
}); 

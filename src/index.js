
import express from 'express'; 
import handlebars from 'express-handlebars'; 

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

// Routes 
app.get("/", (req, res) => {
    res.render('home');  
}); 

// Server listening 
app.listen(port, () => {
    console.log("App listening on port " + port);  
}); 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB= require('./seed');
const methodOverride = require('method-override');


const blogRoutes=require('./routes/blog'); 


mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
    .then(() =>{
        console.log("DB connected");
    } )
    .catch((err) =>{
        console.log(err.message);
    });

// seedDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.use(blogRoutes);


app.get('/', (req,res)=>{
    res.send("landing page");
})


app.listen(8080, ()=>{
    console.log("Listening on the port 8080");
})
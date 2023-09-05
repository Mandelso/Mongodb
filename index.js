const express = require ('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blog_routes.js');

const app = express();

// middlewares
app.use(express.json())

//mongodb uri
const URI = "mongodb+srv://mandelsonenam:FhBecxvWDbokBGTX@cluster0.yb83lne.mongodb.net/";

//connect mongodb
mongoose.connect(URI).then(()=>{
    console.log(`mongoDB connected successfully`)
})
.catch((err) =>{
    console.log(err)
})

//routes

app.use('/blog', blogRouter);


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})


//server password
//FhBecxvWDbokBGTX
const express = require('express')
// Create app instance
const app = express();

const movieCtrl = require('./controllers/movieController')

// Top Level MiddleWare
app.use(express.json());

// * ENDPOINTS
const url = '/api/movies'
app.get(url, movieCtrl.getMovies);
app.post(url, movieCtrl.addMovie);
app.put(url + '/:id', movieCtrl.editMovie);
app.delete(url + '/:id', movieCtrl.deleteMovie);


const PORT = 3005;
app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))
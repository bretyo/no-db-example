let movies = [
    {
        id: 0,
        title: 'epic movie',
        director: 'orson welles',
        image: 'data:image/png;base64,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'
    }
]
let id = 1;

module.exports = {
    getMovies: (req,res)=>{
        res.status(200).send(movies);
    },
    addMovie: (req,res)=>{
        const {title, director, image} = req.body;
        const movie = {
            id: id, 
            title: title, 
            director: director, 
            image: image
        }
        id++;
        movies = [...movies, movie];
        res.status(200).send(movies);
    },
    editMovie: (req,res)=>{
        const{title, director, image} = req.body;
        const {id} = req.params;
        const index = movies.findIndex(movie=>movie.id === +id)
        console.log(index)
        if(index=== -1){
            return res.status(500).send('cannot find id')
        }
        movies[index] = {
            id: +id,
            title: title || movies[index].title,
            director: director || movies[index].director,
            image: image || movies[index].image
        }
        res.status(200).send(movies);
    },
    deleteMovie: (req,res)=>{
        const {id} = req.params;
        const index = movies.findIndex(movie=>movie.id===+id)

        movies.splice(index, 1);

        res.status(200).send(movies);
    }
}
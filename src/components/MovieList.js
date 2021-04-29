import {Component} from 'react';
import axios from 'axios'

import AddMovie from './AddMovie'
import Movie from './Movie'

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movieArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/movies')
        .then(res=>{
            this.setState({ movieArray: res.data })
        })
        .catch(err=>console.log(err))
    }

    deleteMovie =(id)=>{
        axios.delete(`/api/movies/${id}`)
        .then(res=>{
            this.setState({ movieArray: res.data })
        })
        .catch(err=>console.log(err))
    }

    addMovie = (title, director, image) =>{
        axios.post(`/api/movies`, {title: title, director: director, image: image})
        .then(res=> this.setState({ movieArray: res.data }))
        .catch(err=>console.log(err))
    }

    editMovie = (id, movie, title)=>{
        movie.title = title;
        axios.put(`/api/movies/${id}`, movie)
        .then(res=>this.setState({movieArray: res.data}))
        .catch(err=>console.log())
    }

    render(){

        return(
            <div>
                <AddMovie addMovie={this.addMovie}/>
                {this.state.movieArray && (this.state.movieArray.map((movie)=>{
                    return <Movie editMovie={this.editMovie} key={movie.id} deleteMovie={this.deleteMovie} movie={movie}/>
                }))}
            </div>
        )
    }
}

export default MovieList
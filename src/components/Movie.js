import {Component} from 'react'

class Movie extends Component{
    constructor(){
        super();

        this.state = {
            editMode: false,
            title: ''
        }
    }

    toggleEdit =()=>{
        this.setState({ editMode: !this.state.editMode})
    }

    handleChanges=(name,value)=>{
        this.setState({ [name]: value })
    }

    handleSave = (movie)=>{
        this.props.editMovie(movie.id, movie, this.state.title)
        this.toggleEdit();
    }

    render(){
        const {movie} = this.props
        return this.state.editMode?(
            <div className='movie'>
                <p>EDIT MODE!</p>
                <input placeholder={movie.title} name='title' value={this.state.title} onChange={e=>this.handleChanges(e.target.name, e.target.value)} />
                <button onClick={()=>this.handleSave(movie)}>Save</button>
            </div>
        ) : (
            <div className='movie'>
                <img alt={movie.title} src={movie.image} />
                <h2 >{movie.title}</h2>
                <p>by {movie.director}</p>
                <button onClick={()=>this.props.deleteMovie(movie.id)}>Delete</button>
                <button onClick={this.toggleEdit} >Edit</button>
            </div>
        )
    }
}
export default Movie
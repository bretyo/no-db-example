import { getDefaultNormalizer } from '@testing-library/dom';
import {Component} from 'react';

class AddMovie extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            director: '',
            image: ''
        }
    }

    handleChange=(name, value)=>{
        this.setState({ [name] : value })
    }

    render(){
            const {title, director, image} = this.state
        return(
            <div>
                <h2>Add Movie Form</h2>
                <input placeholder='title' name='title' value={this.state.title} onChange={e=>this.handleChange(e.target.name, e.target.value)} />
                <input placeholder='director' name='director' value={this.state.director} onChange={e=>this.handleChange(e.target.name, e.target.value)} />
                <input placeholder='image url' name='image' value={this.state.image} onChange={e=>this.handleChange(e.target.name, e.target.value)} />
                <button onClick={()=>{
                    this.props.addMovie(title, director, image);
                    this.setState({ title: '', director: '', image: '' })
                    }} >Add Movie!</button>
            </div>
        )
    }
}

export default AddMovie
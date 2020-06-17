import React, { Component } from "react";
// const API_KEY = 'c6ce9f72';
const API_KEY = '4287ad07';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
export default class SearchForm extends Component {
    state ={ inputMovie:'' }    
    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state;
        fetch(URL+`s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            // Si el valor se Search es Undefined se le asigna un valor por defeto que es un array vacio, al igual que totalResult se le asigna un valor si son Undefined
            const { Search = [], totalResults = "0" } = results;    
            console.log(Search, totalResults);
            this.props.onResults(Search)
            
        })
    }

    render() {
        return (
            <form onSubmit = {this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Find a Movie" 
                    onChange = {this._handleChange}
                    />
                </div>
                <div className="control">
                    <button 
                    className="button is-info">Search
                    </button>
                </div>
            </div>
            </form>
        );
    }
}

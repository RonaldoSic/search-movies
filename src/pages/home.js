import React, { Component } from 'react'
import {Title} from '../components/title'
import SearchForm from '../components/searchForm'
import MovieList from '../components/movieList';
export default class Home extends Component {
    state = { usedSearch: false, results: [] }
    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        const { results } = this.state;
        return this.state.results.length === 0
            ? <p>Sorry results no found!</p>
            : <MovieList movies={results} />
    }
    render() {
        const {usedSearch} = this.state;
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {usedSearch
                    ? this._renderResults()
                    : <small>Use the Form to search a movie</small>
                }
            </div>
        )
    }
}

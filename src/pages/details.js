import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { ButtonBackToHome } from '../components/buttonBackToHome';
const API_KEY = '4287ad07';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export default class Details extends Component {
    static propTypes = {
        // id: PropTypes.string
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }
    _fetchMovie({ id }) {
        fetch(URL + `i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie })
            })
    }
    // Despues de que el componente se ha renderizado 1 vez se ejecuta
    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params;
        this._fetchMovie({ id });
    }

    // _goBack () {
    //     window.history.back();
    // }

    render() {
        const { Title, Poster, Actors, Plot, Type, Released } = this.state.movie;
        // console.log(this.state.movie)
        return (
            <div className = "Details">
                {/* <button onClick = {this._goBack} >Volver</button> */}
                {/* <Link 
                    className = 'button is-info'
                    to = '/'>
                        Volver a la portada
                    </Link> */}
                <ButtonBackToHome />
                <div className = "Container-details">
                    <img src={Poster} alt={Title} />
                    <div className = "Details-info">
                        <h1 className= "title">{Title}</h1>
                        <h3 className= "subtitle"><strong>Actors:</strong>{' '+Actors}</h3>
                        <span>Type {''}
                            <strong>{Type}</strong> 
                            <br/>
                            {'Released at '+Released}
                        </span>
                        <span>Description</span>
                        <p>{Plot}</p>
                    </div>
                </div>
            </div>
        )
    }
}

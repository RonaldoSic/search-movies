import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Details from './pages/details'
import Home from './pages/home'
import { Switch, Route } from "react-router-dom";
import { NotFound } from './pages/404'

class App extends Component { 
  // _renderResults = () => {
  //   const {results} = this.state;
  //   return results.map(movie => {
  //     return <Movie 
  //     key={movie.imdbID}
  //     title = {movie.Title}
  //     year = {movie.Year}
  //     poster ={movie.Poster}
  //     />
  //   })
  // }
  render(){
    // Verifica que la ruta que se esta buscando tenga el parametro id 
    // const url = new URL(document.location);
    // const pageShow = url.searchParams.has('id')
    // ? <Details id = {url.searchParams.get('id')} />
    // : <Home />
    
    
    //Si aparece el parametro id en la ruta se carga un nuevo componente
    // if(hasID){
    //   // Se recupera el Id de parametro y se le pasa como props al componente Details
    //   return <Details id = {url.searchParams.get('id')}/>
    // }
    return (
      <div className="App">
        {/* {pageShow} */}
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/detail/:id' component = {Details} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    );



  }  
}

export default App;

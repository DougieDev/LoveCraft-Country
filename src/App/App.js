import React, { Component } from 'react';
import EpisodeContainer from '../EpisodeContainer/EpisodeContainer';
import Header from '../Header/Header';
import './App.css';
import { getEpisodes } from '../apiCalls'
import EpisodeForm from '../EpisodeForm/EpisodeForm';
import { Route, Switch, NavLink } from 'react-router-dom';
import Favorites from '../Favorites/Favorites'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      episodes: [],
      error: '',
      title: '',
      episode: '',
      description: '',
      favorites: []
    }
  }

  async componentDidMount() {
    await getEpisodes()
    .then(episodes => this.setState({ episodes: episodes }))
    .catch(error => this.setState({ error: 'Something is amiss!'}))
  }

  addNewEpisode = async (title, episode, description) => {
    return this.setState({ episodes: [...this.state.episodes, {id: episode, title: title, description: description}] })
  }
  
  render() {
    return (
      <main className='App'>
        <header>
          <Header />
          <NavLink className='faves-button' exact to='/favorites'>Favorites</NavLink>
          <EpisodeForm addNewEpisode={this.addNewEpisode} />
        </header>
        {this.state.error && <h1>{this.state.error}</h1>}
        <Switch>
          <Route 
            exact path='/'
            render={() => {
              return(
                <EpisodeContainer episodes={this.state.episodes} />
              )
            }}
          />
          <Route 
            exact path='/favorites'
            render={() => {
              return(
                <Favorites />
              )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Favorites.css'

class Favorite extends Component {
  constructor(props) {
    super();
    this.state = {
      currentValue: undefined
    }
  }

  createFave = (props, starSelected = props.isFavorite) => {
    let star = '⭐️'
    if (starSelected) {
      star = '🌟'
    }
    return (
      <div id='emptyFaveIcon' onclick={()=> {
        props.toggleFavorite(props.episodes.id);
      }}
      onMouseEnter={()=> this.setState({ currentValue: true})}
      onMouseLeav={()=> this.setState({ currentValue: undefined })}
      >
      {star}
      </div>
    )
  }

  render() {
    return (
        <main className='form'>
            <div id='favorite-icon'>
                {this.createFave(this.props, this.state.currentValue)}
            </div>
            <div className='button-box'>
              <NavLink className='back-button' exact to='/'>Back</NavLink>
            </div>
        </main>
      
    )
  }
}

export default Favorite;
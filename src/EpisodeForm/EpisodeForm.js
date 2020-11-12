import React, { Component } from 'react'
import './EpisodeForm.css'

class EpisodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            episode: '',
            description: ''
        }
    }

    handleNameChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewEpisode(this.state.title, this.state.episode, this.state.description)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({title: '', episode: '', description: ''})
    }

    render() {
        return (
            <form className='form'>
                <input
                type='text'
                name='title'
                placeholder='Title...'
                value={this.state.title}
                onChange={e => this.handleNameChange(e)}
                />

                <input
                type='number'
                name='episode'
                placeholder='Episode #...'
                value={this.state.episode}
                onChange={e => this.handleNameChange(e)}
                />

                <input
                type='text'
                placeholder='Description...'
                name='description'
                value={this.state.description}
                onChange={e => this.handleNameChange(e)}
                />

                <button onClick={e => this.handleSubmit(e)}>
                Submit!
                </button>
      </form>
        )
    }
}

export default EpisodeForm;
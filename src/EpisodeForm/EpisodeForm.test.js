import React from 'react'
import EpisodeForm from './EpisodeForm'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('EpisodeForm', () => {
    let mockAddNewEpisode;
    beforeEach(() => {
        mockAddNewEpisode = jest.fn()
        
        render(
            <EpisodeForm addNewEpisode={ mockAddNewEpisode } />
        )
    })

    it('should render its input fields and buttons when form is rendered', () => {
        expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Episode #...')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Description...')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'Submit!'})).toBeInTheDocument()
    })

    it('should be able to have correct values when a user inputs', () => {
        userEvent.type(screen.getByPlaceholderText('Title...'), 'The End')
        userEvent.type(screen.getByPlaceholderText('Episode #...'), '11')
        userEvent.type(screen.getByPlaceholderText('Description...'), 'This is the end of everything')

        expect(screen.getByPlaceholderText('Title...')).toHaveValue('The End')
        expect(screen.getByPlaceholderText('Episode #...')).toHaveValue(11)
        expect(screen.getByPlaceholderText('Description...')).toHaveValue('This is the end of everything')
    })

    it('should be able to call the appropriate functions with the appropriate values when the form is submitted', () => {
        userEvent.type(screen.getByPlaceholderText('Title...'), 'The End')
        userEvent.type(screen.getByPlaceholderText('Episode #...'), '11')
        userEvent.type(screen.getByPlaceholderText('Description...'), 'This is the end of everything')

        expect(screen.getByPlaceholderText('Title...')).toHaveValue('The End')
        expect(screen.getByPlaceholderText('Episode #...')).toHaveValue(11)
        expect(screen.getByPlaceholderText('Description...')).toHaveValue('This is the end of everything')

        userEvent.click(screen.getByRole('button', { name: 'Submit!' }))
        expect(mockAddNewEpisode).toHaveBeenCalledTimes(1)
        userEvent.click(screen.getByRole('button', { name: 'Submit!' }))
        expect(mockAddNewEpisode).toHaveBeenCalledTimes(2)
    })
})
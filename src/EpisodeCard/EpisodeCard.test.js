import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import EpisodeCard from  './EpisodeCard'

describe('EpisodeCard', () => {
    it('should render an episode card', () => {
        const fakeEpisode = {
            id: 1,
            title: "Sundown",
            description: "This is the episode description."
        }

            const { getByText } = render(<EpisodeCard { ...fakeEpisode } />)
            expect(screen.getByText('Sundown')).toBeInTheDocument()
            expect(screen.getByText('This is the episode description.')).toBeInTheDocument()
    })
})
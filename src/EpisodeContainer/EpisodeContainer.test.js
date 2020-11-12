import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EpisodeContainer from './EpisodeContainer'

describe('EpisodeContainer', () => {
    it('should render headings and anchor tags appropriately', () => {
        const fakeEpisodes = [
            {
              id: 1,
              title: 'Sundown',
              description: 'This is the first episode'
            },
            {
              id: 2,
              title: 'Whiteys on the Moon',
              description: 'This is the second episode'
            }
          ]

        render(
            <EpisodeContainer episodes={ fakeEpisodes } />
        )

        expect(screen.getByText('Whiteys on the Moon')).toBeInTheDocument()
        expect(screen.getByText('Sundown')).toBeInTheDocument()
        expect(screen.getByText('This is the first episode'))
        expect(screen.getByText('This is the second episode'))
    })
})
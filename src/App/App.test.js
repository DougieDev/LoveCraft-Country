import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { getEpisodes } from '../apiCalls'
import userEvent from '@testing-library/user-event';
jest.mock('../apiCalls')

describe('App', () => {
  beforeEach(() => {
    getEpisodes.mockResolvedValue(
      [
        {
          id: 1,
          title: 'Sundown',
          description: "This is the first episode"
        },
        {
          id: 2,
          title: 'Whiteys on the Moon',
          description: 'This is the second episode'
        }
      ]
    )

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('should render episodes on page load', async () => {
    const episode1 = await waitFor(() => screen.getByText('Sundown'))
    const episode2 = await waitFor(() => screen.getByText('Whiteys on the Moon'))

    expect(episode1).toBeInTheDocument()
    expect(episode2).toBeInTheDocument()
    expect(screen.getByText('Whiteys on the Moon')).toBeInTheDocument()
    expect(screen.getByText('Sundown')).toBeInTheDocument()
  })

  it('should be able to see a new episode added to DOM after filling out and submitting the form', async () => {
    const episode1 = await waitFor(() => screen.getByText('Sundown'))
    const episode2 = await waitFor(() => screen.getByText('Whiteys on the Moon'))

    expect(episode1).toBeInTheDocument()
    expect(episode2).toBeInTheDocument()

    userEvent.type(screen.getByPlaceholderText('Title...'), 'The End')
    userEvent.type(screen.getByPlaceholderText('Episode #...'), '11')
    userEvent.type(screen.getByPlaceholderText('Description...'), 'This is the end of everything')

    expect(screen.getByPlaceholderText('Title...')).toHaveValue('The End')
    expect(screen.getByPlaceholderText('Episode #...')).toHaveValue(11)
    expect(screen.getByPlaceholderText('Description...')).toHaveValue('This is the end of everything')

    userEvent.click(screen.getByRole('button', { name: 'Submit!' }))

    const episode3 = await waitFor(() => screen.getByText('The End'))

    expect(episode3).toBeInTheDocument()
    expect(screen.getByText('The End')).toBeInTheDocument()
    expect(screen.getByText('This is the end of everything')).toBeInTheDocument()
    expect(screen.getByText('11')).toBeInTheDocument()
  })
})
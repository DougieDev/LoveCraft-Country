import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header', () => {
    it('should render UI elements specific to Header', () => {
        render(<Header />)
        expect(screen.getByText('Lovecraft Country')).toBeInTheDocument()
    })
})

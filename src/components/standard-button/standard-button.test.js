import React from 'react'
import { render, screen } from '@testing-library/react'
import StandardButton from './standard-button'

const data = {
  title: '£25',
}

it('should render successfully', () => {
  render(<StandardButton title={data.title} />)
  const buttonElement = screen.getByText(data.title)
  expect(buttonElement).toBeDefined()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

const data = {
  cta: 'Donate',
  link: '/donate',
}

it('should render successfully', () => {
  render(<Button cta={data.cta} link={data.link} />)
  const buttonItem = screen.getByRole('link', { name: data.cta })
  expect(buttonItem).toHaveProperty('href', 'http://localhost/donate')
})

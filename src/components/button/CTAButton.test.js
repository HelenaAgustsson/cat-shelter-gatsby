import React from 'react'
import { render, screen } from '@testing-library/react'
import CTAButton from './CTAButton'

const data = {
  link: '/shop',
  cta: 'Donate',
}

it('should render successfully', () => {
  render(<CTAButton cta={data.cta} link={data.link} />)
  const buttonElement = screen.getAllByText(data.cta)
  expect(buttonElement).toBeDefined()
  const linkElelement = screen.getByRole('link', { name: data.cta })
  expect(linkElelement).toHaveProperty('href', 'http://localhost/donate')
})

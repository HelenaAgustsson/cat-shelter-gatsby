import React from 'react'
import { render, screen } from '@testing-library/react'
import DonationWidget from '.'

const data = {
  title: 'Make a difference today',
  subtitle: 'Help cats like Ophelia get the care, safety, and love they need.',
  cta: 'Donate today',
  image: {
    file: {
      url: '',
    },
  },
}

it('should render successfully', () => {
  render(<DonationWidget data={data} />)
  const blockItem = screen.getByText(data.title)
  expect(blockItem).toBeDefined()
})

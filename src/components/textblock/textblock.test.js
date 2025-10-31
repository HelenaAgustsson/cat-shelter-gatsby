import React from 'react'
import { render, screen } from '@testing-library/react'
import TextBlock from './textblock'

const data = {
  header: "We're here for every cat",
  content: {
    content:
      'Here at The Cat Shelter we offer our love and expert care to every cat who needs us by rescuing, rehabilitating and rehoming them at our centres.',
  },
}

it('should render successfully', () => {
  render(<TextBlock data={data} />)
  const textBlockItem = screen.getByText("We're here for every cat")
  expect(textBlockItem).toBeDefined()
})

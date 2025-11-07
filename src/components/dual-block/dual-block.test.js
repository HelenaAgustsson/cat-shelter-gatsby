import React from 'react'
import { render, screen } from '@testing-library/react'
import DualBlock from './dual-block'

const data = {
  title: 'Cats in our Care',
  text: 'Every rescue cat deserves a loving home.',
  image: {
    file: {
      url: '',
    },
  },
}

it('should render successfully', () => {
  render(<DualBlock data={data} />)
  const blockItem = screen.getByText(data.title)
  expect(blockItem).toBeDefined()
})

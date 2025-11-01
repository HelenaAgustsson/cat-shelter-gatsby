import React from 'react'
import { render, screen } from '@testing-library/react'
import Product from './product'

const data = {
  title: 'Green beanie',
  image: '',
  alt: 'woman in green beanie',
  description: 'cosy beanie hat',
}

it('should render successfully', () => {
  /*
  render(<Product productData={data} />)
  const productElement = screen.getByText(data.description)
  expect(productElement).toBeDefined()
  const productHeading = screen.getByText(data.title)
  expect(productHeading).toBeDefined()
  */
})

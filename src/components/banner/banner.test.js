import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from './banner'

it('should render successfully', () => {
  render(<Banner title="Help Our Cats" />)
  const bannerItem = screen.getByText('Help Our Cats')
  expect(bannerItem).toBeDefined()
})

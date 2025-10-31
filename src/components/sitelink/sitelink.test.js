import React from 'react'
import { render, screen } from '@testing-library/react'
import SiteLink from './sitelink'

const data = {
  link: '/shop',
  linkText: 'Back to shop',
}

it('should render successfully', () => {
  render(<SiteLink link={data.link} linkText={data.linkText} />)
  const siteLinkItem = screen.getByRole('link', { name: data.linkText })
  expect(siteLinkItem).toHaveProperty('href', 'http://localhost/shop')
})

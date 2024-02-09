import React from 'react'
import { BannerFullWidth } from './styles'
import Button from '../button/button'

const Banner = ({ title }) => {
  return (
    <BannerFullWidth>
      {title}
      <Button cta="Donate" />
    </BannerFullWidth>
  )
}

export default Banner

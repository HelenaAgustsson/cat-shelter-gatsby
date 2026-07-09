import React from 'react'
import { FooterDiv, FooterLink } from './styles'

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        This website was created by{' '}
        <FooterLink
          href="https://github.com/HelenaAgustsson"
          target="_blank"
          rel="noreferrer"
        >
          Helena Agustsson
        </FooterLink>{' '}
        as a portfolio project and does not represent a real cat shelter or
        charity.
      </div>
    </FooterDiv>
  )
}

export default Footer

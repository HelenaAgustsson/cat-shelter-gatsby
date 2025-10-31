import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Section from '../section/section'
import { LinkBack } from './styles'

const SiteLink = ({ link, linkText }) => {
  return (
    <Section>
      <FontAwesomeIcon icon={faArrowLeft} className="fa-thin" />
      <LinkBack to={link}>{linkText}</LinkBack>
    </Section>
  )
}

export default SiteLink

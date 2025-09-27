import React from 'react'
import { IntroDiv, IntroHeader } from './styles'

const Intro = ({ data }) => {
  if (data) {
    return (
      <IntroDiv>
        <div>{data.content.content}</div>
      </IntroDiv>
    )
  }
}

export default Intro

/*
  const data = useStaticQuery(graphql`
    query ContentBlockQuery($id: String!) {
      allContentfulContentBlockBasic(filter: { contentful_id: { eq: $id } }) {
        edges {
          node {
            blockTitle
            blockContent {
              blockContent
            }
          }
        }
      }
    }
  `)
*/

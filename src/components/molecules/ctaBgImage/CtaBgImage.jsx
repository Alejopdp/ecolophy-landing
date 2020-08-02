import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const CtaBgImage = props => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "callToActionSection/backgroundCta.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.background.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          style={{
            width: '100%',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'cover'
          }}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
            {props.children}
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default CtaBgImage;
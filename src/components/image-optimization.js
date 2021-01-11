import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const ImageOptimization = () => {
  const data = useStaticQuery(graphql`
    query {
      imageFixed: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageFluid: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageFluidTracedSVG: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageFluidNoBlur: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFluidGrayscaleRotate: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, grayscale: true, rotate: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFluidDuoTone: file(relativePath: { eq: "pexels-oliver-sjostrom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, duotone: { highlight: "#44ffff", shadow: "#192550"}) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFluidMobile: file(relativePath: { eq: "pexels-oliver-sjostrom-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div>
    <Img fixed={data.imageFixed.childImageSharp.fixed} />
    <h4>Fixed image (blur-up effect).</h4>

    <Img fluid={data.imageFluid.childImageSharp.fluid} />
    <h4>Fluid image (blur-up effect).</h4>

    <Img fluid={data.imageFluidTracedSVG.childImageSharp.fluid} />
    <h4>Fluid image (traced placeholder SVG).</h4>

    <Img fluid={data.imageFluidNoBlur.childImageSharp.fluid} />
    <h4>Fluid image (without blur-up effect).</h4>

    <Img fluid={data.imageFluidGrayscaleRotate.childImageSharp.fluid} />
    <h4>Fluid image (grayscale and rotated).</h4>

    <Img fluid={data.imageFluidDuoTone.childImageSharp.fluid} />
    <h4>Fluid image (duotone).</h4>

    <Img fluid={[data.imageFluidMobile.childImageSharp.fluid,
      {
        ...data.imageFluid.childImageSharp.fluid,
        media: `(min-width: 768px)`,
      },
    ]} />
    <h4>Image art direction.</h4>
  </div>
}

export default ImageOptimization

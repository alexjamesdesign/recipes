import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Card from "../components/card"
import { Link } from "gatsby"
import Img from "gatsby-image"


const IndexPage = ({data: { page, tag, hero }}) => {
  return (
    <>

      <SEO title="Home" />
      <section className="container md:flex flex-wrap md:space-y-4">

        <section className="hero w-full bg-gray-200 relative">
          <Img fluid={hero.image.fluid} className="absolute top-0" /> 
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex items-center justify-end w-full h-full">
              <p className="period text-black font-anton text-4xl md:text-5xl w-full md:w-1/2">{hero.heroText}</p>
            </div>
          </div>
        </section>

        <section className="main-right w-full">
          <div className="featured-section w-full bg-gray-200 p-2 md:p-6">
            <h1 className="w-full text-5xl period">Featured</h1>

            <div className="card-container w-full flex flex-wrap">
              {page.edges.map(({ node }, i) => {
                return (
                  <div className="pr-4 pb-4 w-full sm:w-1/3" key={i}>
                    <div className="w-full bg-white text-black p-2 border-2 border-gray-50" key={i} >
                      <Card slug={node.slug} name={node.name} image={node.recipePic} time={node.preparationTime} tags={node.tag.title} />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </section> 

      </section> 

      <Footer borderColor="border-white" backToTopButton />
    </>
  )
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  page: allDatoCmsRecipe {
    edges {
      node { 
        name
        slug
        recipePic {
          url
          alt
          fluid(imgixParams: {auto: "compress", sharp: 10, h: "390", w: "740", fit: "fillmax", crop: "center" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        preparationTime
        tag {
          title
          slug
        }
      }
    }
  }
  tag: allDatoCmsTag {
    edges {
      node { 
        title 
      }
    }
  }
  hero: datoCmsHero {
    image {
      url
      alt
      fluid(imgixParams: {h: "440", w: "1216", fit: "fillmax", crop: "center" }) {
        ...GatsbyDatoCmsFluid
      }
    }
    heroText
    heroSubText 
  }
}
`
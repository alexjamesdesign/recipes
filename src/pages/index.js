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
          <div className="flex flex-col-reverse justify-center text-align-right h-full absolute top-0 w-full">
            <p className="text-white font-anton text-5xl text-right pr-20 left-20 top-0">{hero.heroText}</p>
          </div>
        </section>

        <section className="main-right w-full">
          <div className="featured-section w-full bg-gray-200 p-6">
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
        ingredients
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
      fluid(imgixParams: {auto: "compress", sharp: 10, h: "390", w: "740", fit: "fillmax", crop: "center" }) {
        ...GatsbyDatoCmsFluid
      }
    }
    heroText 
  }
}
`
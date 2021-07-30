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
      <section className="container flex-wrap md:flex md:space-y-4">

        {/* <section className="relative w-full bg-gray-200 hero">
          <Img fluid={hero.image.fluid} className="absolute top-0" /> 
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex items-center justify-end w-full h-full">
              <p className="w-full text-4xl text-black period font-anton md:text-5xl md:w-1/2">{hero.heroText}</p>
            </div>
          </div>
        </section> */}

        <section className="relative flex flex-wrap w-full md:flex-nowrap">
          <div className="relative w-full h-full overflow-visible md:w-1/2">
            <div className="absolute w-full h-full rounded-xl image-shadow top-9 left-9 bg-secondary"></div>
            <Img fluid={hero.image.fluid} className="absolute top-0" imgStyle={{ borderRadius: '15px' }} /> 
          </div>
          <div className="flex flex-wrap items-center content-center justify-center w-full h-full md:w-1/2 md:px-10">
              <p className="w-full text-2xl text-center uppercase text-primary period font-anton md:text-5xl">{hero.heroText}</p>
              <p className="w-full text-xl text-center uppercase text-primary period">{hero.heroSubText}</p>
              <Link to={hero.recipesLink.slug} className="block clearfix btn-standard" to="index">{hero.recipesLink.name}</Link>
          </div>
        </section>

        <section className="w-full main-right">
          <div className="w-full p-2 bg-gray-200 featured-section md:p-6">
            <h1 className="w-full text-5xl period">Featured</h1>

            <div className="flex flex-wrap w-full card-container">
              {page.edges.map(({ node }, i) => {
                return (
                  <div className="w-full pb-4 pr-4 sm:w-1/3" key={i}>
                    <div className="w-full p-2 text-black bg-white border-2 border-gray-50" key={i} >
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
      fluid(imgixParams: {h: "400", w: "620", fit: "fillmax", crop: "center", borderRadius: "15, 15, 15, 15" }) {
        ...GatsbyDatoCmsFluid
      }
    }
    heroText
    heroSubText
    recipesLink {
      slug
      name
    }
  }
}
`
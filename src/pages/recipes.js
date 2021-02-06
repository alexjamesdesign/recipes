import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Card from "../components/card"
import { Link } from "gatsby"
import Img from "gatsby-image"

const recipesPage = ({data: { recipe, tag }}) => {
  return (
    <>

    <SEO title="Recipes" />
      <section className="container md:flex md:space-x-4">
        <section className="sidebar md:w-1/3">

          <div className="sidebar w-full bg-gray-200 p-6">

            <h1 className="w-full text-5xl period">Tags</h1>
            <div className="flex space-x-4 radius-4 ">
              {tag.edges.map(({ node }, i) => {
                return (
                  
                    <Link to="/blog" className="h-15 w-1/2 relative flex justify-center align-middle" key={i}>
                      <div className="h-15 text-white absolute z-10 pt-6 font-anton">
                        
                          {node.title}
                       
                      </div>
                      <Img fluid={node.image.fluid} className="w-full absolute h-full rounded-md" alt={node.image.alt} />
                    </Link>
                  
                )
              })}
            </div>
          </div>

        </section>

        <section className="main-right md:w-2/3">
          <div className="featured-section w-full bg-gray-200 p-6">
            <h1 className="w-full text-5xl period">Featured</h1>

            <div className="card-container w-full flex flex-wrap">
              {recipe.edges.map(({ node }, i) => {
                return (
                  <div className="pr-4 pb-4 w-full sm:w-1/2" key={i}>
                    <div className="w-full bg-white text-black p-2 border-2 border-gray-50 rounded-md" key={i} >
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

export default recipesPage

export const query = graphql`
query RecipePageQuery {
  recipe: allDatoCmsRecipe {
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
          image {
            alt
            fluid(imgixParams: {auto: "compress", sharp: 10, h: "390", w: "740", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
  tag: allDatoCmsTag {
    edges {
      node { 
        title 
        slug
        image {
          alt
          fluid(imgixParams: {auto: "compress", sharp: 10, h: "390", w: "740", fit: "fillmax", crop: "center", bri: -15, blur: 35 }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}
`
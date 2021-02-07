import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Card from "../components/card"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"


export const containerIn = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

export const itemIn = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
  transition: { duration: 1.3 }
}

const recipesPage = ({data: { recipe, tag }, item, container}) => {
  return (
    <>

    <SEO title="Recipes" />
      <section className="container md:flex md:space-x-4">
        <section className="sidebar md:w-1/3">

          <div className="w-full bg-gray-200 p-6">

            <h1 className="w-full text-5xl period">Tags</h1>
            <div className="flex space-x-4 radius-4">
              {tag.edges.map(({ node }, i) => {
                return (
                  
                    <Link to={`/tags/${node.slug}`} activeClassName="is-active" className="h-15 w-1/2 relative flex justify-center align-middle tag-link" key={i}>
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

            <motion.div 
              className="card-container w-full flex flex-wrap"
              variants={containerIn}
              initial="hidden"
              animate="visible"
            >
              {recipe.edges.map(({ node }, i) => {
                return (
                  <motion.div 
                    className="pr-4 pb-4 w-full sm:w-1/2"
                    key={i}
                    variants={itemIn}
                  >
                    <div className="w-full bg-white text-black p-2 border-2 border-gray-50 rounded-md" key={i} >
                      <Card slug={node.slug} name={node.name} image={node.recipePic} time={node.preparationTime} tags={node.tag.title} />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

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
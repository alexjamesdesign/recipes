import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Card from "../components/card"
import Tags from "../components/tags"
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

          <div className="w-full p-2 bg-secondary rounded-xl md:p-6">
            
            <Tags tagItems={tag} />
            
          </div>

        </section>

        <section className="main-right md:w-2/3">
          <div className="w-full p-2 featured-section bg-primary rounded-xl md:p-6">
            <h1 className="w-full text-5xl text-white period">Featured</h1>

            <motion.div 
              className="flex flex-wrap w-full card-container"
              variants={containerIn}
              initial="hidden"
              animate="visible"
            >
              {recipe.edges.map(({ node }, i) => {
                return (
                  <motion.div 
                    className="w-full pb-4 pr-4 sm:w-1/2"
                    key={i}
                    variants={itemIn}
                  >
                    <div className="w-full p-2 text-black bg-white border-gray-400 border-1 rounded-xl" key={i} >
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
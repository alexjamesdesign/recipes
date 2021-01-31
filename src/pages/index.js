import React from "react"
import SEO from "../components/seo"
import Card from "../components/card"
import { motion } from 'framer-motion'
import Img from "gatsby-image"


const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({data: { page, tag }}) => {
  return (
    <>

      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
        <motion.div 
          className="card-container w-full flex space-x-4"
          variants={item}
          transition="easeInOut"
        >

          {page.edges.map(({ node }, i) => {
            return (
                <Card name={node.name} image={node.recipePic} time={node.preparationTime} tags={node.tag.title} />
            )
          })}

        </motion.div> 

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Lorem ipsum dolor sit amet</h2>
          
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
      </motion.section> 
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
}
`
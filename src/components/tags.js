import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
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
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  },
  transition: { duration: 1.3 }
}


const Tags = ({ tagItems }) => (
  <div>
    <h1 className="w-full text-5xl period text-primary">Tags</h1>
    
    <motion.div 
      className="flex flex-wrap justify-left radius-4"
      variants={containerIn}
      initial="hidden"
      animate="visible"
    >
    <Link to={`/recipes/`} activeClassName="is-active bg-secondary underline" className="px-4 py-2 mb-4 ml-0 mr-4 text-white rounded-2xl bg-tertiary">
      All
    </Link>
      {tagItems.edges.map(({ node }, i) => {
        return (
            <motion.div 
            className="px-4 py-2 mb-4 ml-0 mr-4 text-white rounded-2xl bg-tertiary"
            key={i}
            variants={itemIn}
            whileHover={{ scale: 1.1 }}
            >
              <Link to={`/tags/${node.slug}`} activeClassName="is-active underline" className="" key={i}>
              {node.title}
              </Link>
            </motion.div>
        )
      })}
    </motion.div>
  </div>
    
  )
  
  export default Tags
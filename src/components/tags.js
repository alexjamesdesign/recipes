import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Link from "gatsby-link"


const Tags = ({ tagItems }) => (
  <Link to={`recipes/${tagItems.slug}`}>
    <h1 className="w-full text-5xl period">Tags</h1>
    <div className="flex space-x-4 radius-4">
      {tagItems.edges.map(({ node }, i) => {
        return (
          
            <Link to={`/tags/${node.slug}`} activeClassName="is-active" className="h-15 w-1/2 relative flex justify-center align-middle tag-link" key={i}>
              <div className="h-15 text-white absolute z-10 pt-3 font-anton">
                
                  {node.title}
                
              </div>
              <Img fluid={node.image.fluid} className="w-full absolute h-full rounded-md" alt={node.image.alt} />
            </Link>
          
        )
      })}
    </div>
  </Link>
    
  )
  
  export default Tags
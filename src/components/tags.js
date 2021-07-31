import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"


const Tags = ({ tagItems }) => (
  <Link to={`recipes/${tagItems.slug}`}>
    <h1 className="w-full text-5xl period text-primary">Tags</h1>
    <div className="flex flex-wrap justify-left radius-4">
      <Link to={`/recipes/`} activeClassName="is-active bg-secondary underline" className="px-4 py-2 mb-4 ml-0 mr-4 text-white rounded-2xl bg-tertiary">
        All
      </Link>
      {tagItems.edges.map(({ node }, i) => {
        return (
          
            <Link to={`/tags/${node.slug}`} activeClassName="is-active bg-secondary underline" className="px-4 py-2 mb-4 ml-0 mr-4 text-white rounded-2xl bg-tertiary" key={i}>
              {node.title}
            </Link>
          
        )
      })}
    </div>
  </Link>
    
  )
  
  export default Tags
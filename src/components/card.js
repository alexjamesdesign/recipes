import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Card = ({ name, tags, image, time }) => (

    <div className="w-1/2 bg-white text-black p-2 border-2 border-gray-50">
        <Img fluid={image.fluid} className="w-full" alt={image.alt} />
        <h1 className="uppercase text-black pt-2">{name}</h1>
        <div className="flex justify-between">
            <p>{tags}</p> 
            
            <p>{`${time ? time+' mins' : "No time set"}`}</p>
        </div>     
    </div>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
  }
  
  export default Card
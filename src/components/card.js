import React from "react"
import PropTypes from "prop-types"

const Card = ({ name, tag }) => (
  

    <div className="w-1/2 bg-white text-black p-2 border-2 border-gray-50">
        <div className="w-full p-10 h-10 bg-gray-300"></div>
        <h1 className="uppercase text-black">{name}</h1>
        <p>{tag}</p>        
    </div>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
  }
  
  export default Card
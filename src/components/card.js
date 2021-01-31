import React from "react"
import PropTypes from "prop-types"

const Card = ({ name }) => (
  

    <div className="w-1/2 bg-white text-black">
        <h1 className="uppercase text-black">{name}</h1>        
    </div>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
  }
  
  export default Card
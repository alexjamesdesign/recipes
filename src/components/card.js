import React from "react"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Img from "gatsby-image"

export const revealInOutInSlow = {
	initial: { y: "130%" },
	enter: { 
    y: "0%",
    transition: { 
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.85
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  }
}

const item = {
hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
}

const Card = ({ name, tags, image, time, revealInOutInSlow }) => (

    <motion.div className="w-1/2 bg-white text-black p-2 border-2 border-gray-50" variants={revealInOutInSlow} >
        <Img fluid={image.fluid} className="w-full" alt={image.alt} />
        <h1 className="uppercase text-black pt-2">{name}</h1>
        <div className="flex justify-between">
            <p>{tags}</p> 
            <p>{`${time ? time+' mins' : "No time set"}`}</p>
        </div>     
    </motion.div>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
  }
  
  export default Card
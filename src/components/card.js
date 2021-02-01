import React from "react"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
import { CgTime } from "@react-icons/all-files/cg/CgTime";


const Card = ({ name, tags, image, time}) => (

    <div>
        <Img fluid={image.fluid} className="w-full" alt={image.alt} />
        <h1 className="uppercase text-black pt-2">{name}</h1>
        <div className="flex justify-between">
            <p>{tags}</p>
            <p className="flex items-center"><CgTime className="mr-2" /> {`${time ? time+' mins' : "No time set"}`}</p>
        </div>     
    </div>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.object,
    time: PropTypes.number
  }
  
  export default Card
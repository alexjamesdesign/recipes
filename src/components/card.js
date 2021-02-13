import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Link from "gatsby-link"
import { CgTime } from "@react-icons/all-files/cg/CgTime";
import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";


const Card = ({ name, tags, image, time, slug}) => (
  <Link to={`recipes/${slug}`}>
    <div>
          { image && ( 
          <Img fluid={image.fluid} className="w-full" alt={image.alt} />
          )}
          <h1 className="uppercase text-black pt-2 flex items-center">{name} <FiArrowRightCircle className="ml-2 mt-0" /></h1>
          <div className="flex justify-between">
              <p>{tags}</p>
              <p className="flex items-center"><CgTime className="mr-2" /> {`${time ? time+' mins' : "No time set"}`}</p>
          </div>     
    </div>
  </Link>
    
  )
  
  Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.object,
    time: PropTypes.number,
    link: PropTypes.string
  }
  
  export default Card
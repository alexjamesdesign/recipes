import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Link from "gatsby-link"
import { CgTime } from "@react-icons/all-files/cg/CgTime";
import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";


const Card = ({ name, tags, image, time, slug}) => (
  <Link to={`${slug}`}>
    <div>
          { image && ( 
          <Img fluid={image.fluid} className="w-full" alt={image.alt} className="rounded-xl" />
          )}
          <div className="flex items-center justify-between w-full">
            <div className="">
              <h1 className="flex items-center pb-0 mt-2 mb-2 mr-5 uppercase text-primary">{name}</h1>
              <p>{tags}</p>
            </div> 
            <div className="">
              <FaArrowAltCircleRight className="bottom-0 right-0 mt-0 ml-2 text-2xl text-tertiary" />
            </div>  
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
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
import { motion } from "framer-motion"
import { CgBowl } from "@react-icons/all-files/cg/CgBowl";


const Header = ({ siteTitle }) => (
  <header>
    
    <div className="mb-4">
      <div className="container block mb-9">
        <div className="flex flex-wrap items-end justify-between">

        <div className="w-full h-40 hero">
        
          <div className="flex hero-left">
            <Nav className="block pb-3 text-white" />
          </div>

          <Link to="/">
            
            <motion.div
              className="hero-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
          <div className="hero-right"></div>

        </div>

        </div>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

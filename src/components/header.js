import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
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

          <div className="hero-logo"></div>
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

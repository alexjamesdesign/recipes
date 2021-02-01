import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from '../components/nav'

const Header = ({ siteTitle }) => (
  <header>
    
    <div className="bg-black mb-4">
      <div className="container mb-9 block">
        <div className="flex flex-wrap items-end justify-between">
          <p className="font-anton text-5xl text-white pb-3 period">Recipes</p>
          <div className="flex items-end">
            <Nav className="text-white pb-3 block" />
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

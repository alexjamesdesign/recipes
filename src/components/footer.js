import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
import { CgBowl } from "@react-icons/all-files/cg/CgBowl";


const Footer = ({ siteTitle }) => (
  <footer>
    
    <div className="bg-black w-full mt-4">
      <div className="container">
          <div className="flex flex-wrap items-center justify-between">

            <Nav />
            <Link to="/"><p className="font-anton text-2xl text-white pb-1 period flex items-center"><CgBowl className="mr-2 mt-2" /> Recipes</p></Link>
            
        </div>
      </div>
    </div>

  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

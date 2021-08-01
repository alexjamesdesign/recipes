import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
import { CgBowl } from "@react-icons/all-files/cg/CgBowl";


const Footer = ({ siteTitle }) => (
  <footer>
    
    <div className="w-full p-4 mt-4 bg-secondary">
      <div className="container">
          <div className="flex flex-wrap items-center justify-between">

            <Nav />
            <svg width="60" height="60" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="63" cy="63" r="63" fill="#F8F3E8"/>
            <circle cx="63.0368" cy="63.0368" r="48.0368" fill="#3A857E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M83.4625 43.1422C82.513 42.1927 80.9734 42.1927 80.0239 43.1422L66.9816 56.1846H38.3661V61.0477H38.3866C38.9147 74.0092 49.5896 84.3552 62.681 84.3552C75.7724 84.3552 86.4474 74.0092 86.9755 61.0477H86.9959V56.1846H73.8588L83.4625 46.5809C84.4122 45.6313 84.4122 44.0918 83.4625 43.1422ZM67.9724 61.0477C67.9831 61.0477 67.9941 61.0477 68.005 61.0477H82.1074C81.5832 71.3224 73.0861 79.4923 62.681 79.4923C52.2758 79.4923 43.7788 71.3224 43.2547 61.0477H67.9724Z" fill="white"/>
            </svg>

            
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

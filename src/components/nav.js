import React from "react"
import { Link } from "gatsby"
import { GoLinkExternal } from 'react-icons/go';

const navItems = [
  {
    title: "Home",
    url: "/"
  },{
    title: "Recipes",
    url: "/recipes/"
}]

const Nav = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="md:flex md:content-end md:justify-center md:flex-col md:pl-6">
      <div className={`navigation-wrapper navigation-wrapper--${menuActive} bg-secondary text-black`} >
        <ul className="md:bg-red md:flex md:w-full md:flex-row md:justify-start md:items-stretch">
          {navItems.map(({ title, url}, index) =>
          <li>
            <Link key={index} className="px-4 py-2 text-black rounded-2xl navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active bg-tertiary text-white" to={`${url}`}>{title}</Link>
          </li>
        )}
        </ul>
      </div>
      <div aria-label="Navigation menu button" tabIndex={0} role="button" className={`${burgerActive} navigation-button`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
        <div className={`navigation-button__inside ${burgerActive}`}>
          <span className="left-0 navigation-button__lines navigation-button__line-1"></span>
          <span className="left-0 mt-2 navigation-button__lines navigation-button__line-2"></span>
          <span className="left-0 mt-4 navigation-button__lines navigation-button__line-3"></span>
          <span className="right-0 navigation-button__lines navigation-button__line-4"></span>
          <span className="right-0 mt-2 navigation-button__lines navigation-button__line-5"></span>
          <span className="right-0 mt-4 navigation-button__lines navigation-button__line-6"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Nav
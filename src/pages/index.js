import React from "react"
import SEO from "../components/seo"
import Card from "../components/card"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
import { Link } from "gatsby"


const IndexPage = ({data: { page, tag }}) => {
  return (
    <>

      <SEO title="Home" />
      <section className="container flex space-x-4">
        <section className="sidebar w-1/3">

          <div className="sidebar w-full bg-gray-200 p-6">

            <h1 className="w-full text-5xl period">Tags</h1>

            {tag.edges.map(({ node }, i) => {
              return (
                  <Link to="/blog" className="block" key={i}>{node.title}</Link>
              )
            })}

          </div>

        </section>

        <section className="main-right w-2/3">
          <div className="featured-section w-full bg-gray-200 p-6">
            <h1 className="w-full text-5xl period">Featured</h1>

            <div className="card-container w-full flex flex-wrap">
              {page.edges.map(({ node }, i) => {
                return (
                  <div className="pr-4 pb-4 w-1/2" key={i} >
                    <div className="w-full bg-white text-black p-2 border-2 border-gray-50" key={i} >
                      <Card name={node.name} image={node.recipePic} time={node.preparationTime} tags={node.tag.title} />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </section> 

      </section> 
    </>
  )
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  page: allDatoCmsRecipe {
    edges {
      node { 
        name
        slug
        recipePic {
          url
          alt
          fluid(imgixParams: {auto: "compress", sharp: 10, h: "390", w: "740", fit: "fillmax", crop: "center" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        preparationTime
        ingredients
        tag {
          title
          slug
        }
      }
    }
  }
  tag: allDatoCmsTag {
    edges {
      node { 
        title 
      }
    }
  }
}
`
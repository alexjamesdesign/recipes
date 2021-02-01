import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
import { Link } from "gatsby"


const recipePage = ({data: { recipe, tag }}) => {
  return (
    <>

    <SEO title="Home" />
    {recipe.edges.map(({ node }, i) => {
        return (
            <section className="container flex space-x-4">
                <section className="sidebar w-1/3">

                <div className="sidebar w-full bg-gray-200 p-6">

                    <h1 className="w-full text-5xl period">Ingredients</h1>
                    <p>{node.ingredients}</p>

                </div>

                </section>

                <section className="main-right w-2/3">
                <div className="featured-section w-full bg-gray-200 p-6">
                    <h1 className="w-full text-5xl period">{node.name}</h1>
                    {tag.title}

                    <div className="recipe-stats bg-gray-300 p-10">
                        <p>{node.preparationTime}</p>
                        <p>{node.tag.title}</p>
                    </div>

                </div>

                </section> 

            </section> 
        )
    })}
    </>
  )
}

export default recipePage

export const query = graphql`
query RecipePageQuery {
  recipe: allDatoCmsRecipe(filter: {slug: {eq: "chicken-katsu-curry"}}) {
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
import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { CgTime } from "@react-icons/all-files/cg/CgTime";
import { CgTag } from "@react-icons/all-files/cg/CgTag";

const recipePage = ({data: { recipe, tag }}) => {
  return (
    <>

    <SEO title="Home" />
        <section className="container md:flex md:space-x-4">

            <section className="sidebar md:w-1/3">

                <div className="sidebar w-full bg-gray-200 p-6">

                    <h1 className="w-full text-5xl period">Ingredients</h1>
                    <div className="ingredients-wysiwyg" dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></div>

                </div>

            </section>

            <section className="main-right mt-6 md:mt-0 md:w-2/3">

                <div className="featured-section w-full bg-gray-200 p-6">

                    <h1 className="w-full text-5xl period">{recipe.name}</h1>
                    
                    <div className="recipe-stats bg-gray-300 p-4 my-4 flex gap-6">
                        <p className="flex items-center"><CgTime className="mr-2" /> {`${recipe.preparationTime ? recipe.preparationTime+' mins' : "No time set"}`}</p> 
                        <p className="flex items-center"><CgTag className="mr-2" /> {recipe.tag.title}</p> 
                    </div>

                    <div className="recipe-pics bg-gray-100">
                        
                        <Img fluid={recipe.recipePic.fluid} className="w-full h-30" alt={recipe.recipePic.alt} />

                    </div>

                    <div className="recipe-method bg-gray-200 py-2">

                        <h1 className="w-full text-5xl period">Method</h1>
                        
                        {
                            recipe.directions.map((step) => (
                                <div key={step.id} >
                                    {
                                    step.model.apiKey === 'step' &&
            
                                        <div className="pt-4 w-full flex">
                                            <Img fluid={step.stepPic.fluid} key={step.stepPic.title} alt={step.stepPic.alt} className="w-1/4" />
                                            <div className="py-3">
                                                <p>Step One</p>
                                                <p>{step.stepText}</p>
                                            </div>
                                        </div>
                                    
                                    }
                                </div>
                            ))
                        }  

                    </div>

                </div>

            </section> 

        </section>

        <Footer borderColor="border-white" backToTopButton />
    </>
  )
}

export default recipePage

export const query = graphql`
query {
  recipe: datoCmsRecipe(slug: {eq: "chicken-katsu-curry"}) {
    name
    slug
    recipePic {
        url
        alt
        fluid(imgixParams: {auto: "compress", sharp: 10, h: "260", w: "752", fit: "fillmax", crop: "center" }) {
        ...GatsbyDatoCmsFluid
        }
    }
    preparationTime
    ingredients
    method
    tag {
        title
        slug
    }
    directions {
        ... on DatoCmsStep {
            id
            model { apiKey }
            stepPic {
                title
                fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
                }
                alt
            }
            stepText
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
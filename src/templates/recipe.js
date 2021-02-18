import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { CgTime } from "@react-icons/all-files/cg/CgTime";
import { CgTag } from "@react-icons/all-files/cg/CgTag";



// let counter = 0;
// for (let i = 0; i < storage.length; i++) {
//   if (storage[i].status === '0') counter++;
// }

const recipeTemplate = ({data: { recipe, tag }}) => {
  return (
    <>

    <SEO title="Home" />
    <section className="container flex flex-wrap md:flex-nowrap">

        <section className="sidebar w-full md:w-1/3">

            <h1 className="w-full text-5xl period md:hidden">{recipe.name}</h1>

            <div className="recipe-pics md:hidden">
                  { recipe.recipePic && ( 
                  <Img fluid={recipe.recipePic.fluid} className="w-full h-30" alt={recipe.recipePic.alt} />
                  )}
                  <div className="recipe-stats bg-gray-300 p-4 my-4 flex gap-6">
                      <p className="flex items-center"><CgTime className="mr-2" /> {`${recipe.preparationTime ? recipe.preparationTime+' mins' : "No time set"}`}</p> 
                      <p className="flex items-center"><CgTag className="mr-2" /> {recipe.tag.title}</p> 
                  </div>                  

            </div>

            <div className="sidebar w-full bg-gray-200 p-6">

                <h1 className="w-full text-5xl period">Ingredients</h1>

                {
                  recipe.ingredients.map((item) => (
                    <ul className="ingredients">
                      {item.model.apiKey === 'item' && 
                        <li className="w-full" dangerouslySetInnerHTML={{ __html: `<span>${item.amount}</span> ${item.ingredientsName} `}}></li>
                      }
                    </ul>
                  ))
                }

            </div>

        </section>

        <section className="main-right mt-6 md:mt-0 md:w-2/3">

            <div className="featured-section w-full md:p-6">

                <h1 className="w-full text-5xl period hidden md:block">{recipe.name}</h1>
                
                <div className="recipe-stats bg-gray-300 p-4 my-4 flex gap-6 hidden md:flex">
                    <p className="flex items-center"><CgTime className="mr-2" /> {`${recipe.preparationTime ? recipe.preparationTime+' mins' : "No time set"}`}</p> 
                    <p className="flex items-center"><CgTag className="mr-2" /> {recipe.tag.title}</p> 
                </div>

                <div className="recipe-pics hidden md:block">
                    { recipe.recipePic && ( 
                      <Img fluid={recipe.recipePic.fluid} className="w-full h-30" alt={recipe.recipePic.alt} />
                    )}

                </div>

                <div className="recipe-method py-2 mt-2">

                    <h1 className="w-full text-5xl pt-2 period">Method</h1>

                    {
                        recipe.directions.map((step, i) => (
                            <div key={step.id} className="bg-gray-200 my-2">
                                {
                                step.model.apiKey === 'step' &&

                                    <div className="p-4 w-full flex flex-wrap	lg:flex-nowrap items-center">
                                      { step.stepPic ? (
                                      <div className="counting py-3 pr-4 w-full lg:w-3/4">
                                          <p className="p-3 mb-3 bg-gray-400 w-12 h-12 text-center rounded-full font-bold">{ i + 1}</p>
                                          <div dangerouslySetInnerHTML={{ __html: step.stepText }}></div>
                                      </div>
                                      ) : (
                                        <div className="counting py-3 w-full lg:w-full">
                                          <p className="p-3 mb-3 bg-gray-400 w-12 h-12 text-center rounded-full font-bold">1</p>
                                          <div dangerouslySetInnerHTML={{ __html: step.stepText }}></div>
                                        </div>
                                      )}

                                      { step.stepPic && (
                                        <div className="w-full lg:w-1/4">
                                          <Img fluid={step.stepPic.fluid} key={step.stepPic.title} alt={step.stepPic.alt} className="step-pic w-full" />
                                        </div>
                                      )}

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

export default recipeTemplate

export const query = graphql`
query RecipeTemplateQuery($slug: String!) {
  recipe: datoCmsRecipe(slug: {eq: $slug}) {
    name
    slug
    recipePic {
        url
        alt
        fluid(imgixParams: {auto: "compress", h: "520", w: "1504", fit: "fillmax", crop: "center" }) {
        ...GatsbyDatoCmsFluid
        }
    }
    preparationTime
    tag {
        title
        slug
    }
    ingredients {
      ... on DatoCmsItem {
          id
          model { apiKey }
          ingredientsName
          amount
      }
    }
    directions {
      ... on DatoCmsStep {
          id
          model { apiKey }
          stepPic {
              title
              fluid(maxWidth: 1600, imgixParams: { w: "600", h: "300", fm: "jpg", auto: "compress" }) {
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
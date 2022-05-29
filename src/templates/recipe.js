import React from "react"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { motion } from 'framer-motion'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { CgTime } from "@react-icons/all-files/cg/CgTime";
import { CgTag } from "@react-icons/all-files/cg/CgTag";

// let counter = 0;
// for (let i = 0; i < storage.length; i++) {
//   if (storage[i].status === '0') counter++;
// }

const currentURL = window.location.pathname;
var scrollLink = `${currentURL}#ingredients`;

const recipeTemplate = ({data: { recipe, tag }}) => {
  return (
    <>

    <SEO title="Home" />
    <section className="container flex flex-wrap md:flex-nowrap">

        <section className="w-full sidebar md:w-1/3">

            <h1 className="w-full text-5xl text-primary period md:hidden">{recipe.name}</h1>

            <div className="recipe-pics md:hidden">
                  { recipe.recipePic && ( 
                  <Img fluid={recipe.recipePic.fluid} className="w-full h-30 rounded-xl" alt={recipe.recipePic.alt} />
                  )}
                  <div className="flex gap-6 p-4 my-4 bg-secondary rounded-xl recipe-stats">
                      <p className="flex items-center"><CgTime className="mr-2" /> {`${recipe.preparationTime ? recipe.preparationTime+' mins' : "No time set"}`}</p> 
                      <p className="flex items-center"><CgTag className="mr-2" /> {recipe.tag.title}</p> 
                  </div>                  

            </div>


            { recipe.ingredientModule.length ? ( 

            <div id="ingredients" className="w-full p-6 bg-primary sidebar rounded-xl">

                <h1 className="w-full pb-6 text-5xl text-white period">Ingredients</h1>

                {recipe.ingredientModule.map((ingred) => (
                  <div className="pb-6">
                    <h2 className="w-full text-4xl text-white period">{ingred.ingredientGroupTitle}</h2>
                    
                    {ingred.ingredient.map((ingreds) => (
                      <ul className="ingredients">
                        {ingreds.model.apiKey === 'item' && 
                          <li className="w-full" dangerouslySetInnerHTML={{ __html: `<span>${ingreds.amount}</span> ${ingreds.ingredientsName} `}}></li>
                        }
                      </ul>
                    ))}
                  </div>
                
                ))}
                
            </div>

            ) : ( 
              
            <div className="w-full p-6 bg-primary sidebar rounded-xl">

              <h1 className="w-full text-5xl text-white period">Ingredients</h1>

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

            )}

        </section>

        <section className="mt-6 main-right md:mt-0 md:w-2/3">

            <div className="w-full featured-section md:p-6">

                <h1 className="hidden w-full text-5xl period md:block text-primary">{recipe.name}</h1>
                
                <div className="flex hidden gap-6 p-4 my-4 bg-secondary rounded-xl recipe-stats md:flex">
                    <p className="flex items-center"><CgTime className="mr-2" /> {`${recipe.preparationTime ? recipe.preparationTime+' mins' : "No time set"}`}</p> 
                    <p className="flex items-center"><CgTag className="mr-2" /> {recipe.tag.title}</p> 
                </div>

                <div className="hidden recipe-pics md:block">
                    { recipe.recipePic && ( 
                      <Img fluid={recipe.recipePic.fluid} className="w-full h-30 rounded-xl" alt={recipe.recipePic.alt} />
                    )}

                </div>

                

                  <motion.div
                    transition="easeInOut"
                    className="py-2 mt-2 recipe-method"
                  >

                  

                    <div className="relative hello">

                      <h1 className="w-full pt-2 text-5xl period text-primary">Method</h1>

                      {
                          recipe.directions.map((step, i) => (
                              <div 
                                key={step.id}
                                className="my-2 bg-secondary rounded-xl"
                                data-sal="fade" data-sal-delay="200" data-sal-easing="ease"
                              >

                                  {
                                  step.model.apiKey === 'step' &&

                                      <div className="flex flex-wrap items-center w-full p-4 lg:flex-nowrap">
                                        { step.stepPic ? (
                                        <div className="w-full py-3 pr-4 counting lg:w-8/12">
                                            <p className="w-12 h-12 p-3 mb-3 font-bold text-center text-white rounded-full bg-tertiary">{i + 1}</p>
                                            <div className="content" dangerouslySetInnerHTML={{ __html: step.stepText }}></div>
                                        </div>
                                        ) : (
                                          <div className="w-full py-3 counting lg:w-full">
                                            <p className="w-12 h-12 p-3 mb-3 font-bold text-center text-white rounded-full bg-tertiary">{i + 1}</p>
                                            <div className="content" dangerouslySetInnerHTML={{ __html: step.stepText }}></div>
                                          </div>
                                        )}

                                        { step.stepPic && (
                                          <div className="w-full lg:w-4/12">
                                            <Img fluid={step.stepPic.fluid} key={step.stepPic.title} alt={step.stepPic.alt} className="w-full rounded-lg step-pic" />
                                          </div>
                                        )}

                                      </div>
                                  }
                              </div>
                          ))
                      }  
                    </div>
                    
                    <div
                      data-sal="fade-slow" data-sal-delay="700" data-sal-easing="ease" 
                      className="sticky bottom-0 flex flex-col items-end"
                    >
                      <AnchorLink to={scrollLink} className="px-6 py-4 mb-2 mr-2 text-center text-white rounded-2xl bg-tertiary" title="Ingredients">
                        Ingredients
                      </AnchorLink>
                      {/* <a href="#ingredients" className="px-6 py-4 mb-2 mr-2 text-center text-white rounded-2xl bg-tertiary">Ingredients</a> */}
                    </div>

                </motion.div>

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
        fluid(imgixParams: {h: "520", w: "1504", fit: "fillmax", crop: "center" }) {
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
    ingredientModule {
      ... on DatoCmsIngredientGroup {
        id
        model { apiKey }
        ingredientGroupTitle
        ingredient {
          id
          model { apiKey }
          amount
          ingredientsName
        }
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
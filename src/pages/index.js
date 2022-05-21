import React, { useEffect } from "react";
import Footer from "../components/footer"
import SEO from "../components/seo"
import Card from "../components/card"
import { Link } from "gatsby"
import { useEmblaCarousel } from "embla-carousel/react"
import Img from "gatsby-image"


const IndexPage = ({data: { page, tag, hero }}) => {

  const [viewportRef, embla] = useEmblaCarousel({
    inViewThreshold: 0.65,
    loop: true,
    align: "start",
  }); 

  useEffect(() => {
      if (!embla) return;
  }, [embla]);
  
  return (
    <>

      <SEO title="Home" />
      <section className="container flex-wrap md:flex md:space-y-4">

        <section className="relative flex flex-wrap w-full md:mb-20 md:flex-nowrap">
          <div className="relative w-full h-full overflow-visible md:w-1/2">
            <div className="absolute w-full h-full rounded-xl image-shadow top-9 left-9 bg-secondary"></div>
            <Img fluid={hero.image.fluid} className="absolute top-0" imgStyle={{ borderRadius: '15px' }} /> 
          </div>
          <div className="flex flex-wrap items-center content-center justify-center w-full h-full mt-12 mb-12 md:mb-0 md:mt-0 md:w-1/2 md:px-10 md:pl-16">
              <p className="w-full mb-4 text-2xl text-center uppercase text-primary period font-anton md:text-5xl">{hero.heroText}</p>
              <p className="w-full mb-4 text-xl text-center uppercase text-primary period">{hero.heroSubText}</p>
              <Link to={`/recipes/${hero.recipesLink.slug}`} className="block clearfix btn-standard">{hero.recipesLink.name}</Link>
          </div>
        </section>

        <section className="w-full main-right">
          <div className="w-full p-4 bg-primary rounded-xl featured-section">
            
            <h1 className="w-full px-2 text-5xl text-white md:p-6 period">Featured</h1>

            <div className="embla">
              <div className="w-full overflow-x-auto embla__viewport" ref={viewportRef}>
                <div className="embla__container md:ml-6 md:mb-6">
                  {page.edges.map(({ node }, i) => {
                    return (
                      
                        <div className="w-1/4 h-full p-2 text-black bg-white border-gray-600 embla__slide rounded-xl border-1"  key={i} >
                          <Card slug={`recipes/${node.slug}`} name={node.name} image={node.recipePic} time={node.preparationTime} tags={node.tag.title} />
                        </div>
                      
                    )
                  })}
                </div>
              </div>
              
            </div>

          </div>

        </section> 

      </section> 

      <Footer borderColor="border-white" backToTopButton />
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
  hero: datoCmsHero {
    image {
      url
      alt
      fluid(imgixParams: {h: "400", w: "620", fit: "fillmax", crop: "center", borderRadius: "15, 15, 15, 15" }) {
        ...GatsbyDatoCmsFluid
      }
    }
    heroText
    heroSubText
    recipesLink {
      slug
      name
    }
  }
}
`
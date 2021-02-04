const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    {
        allDatoCmsRecipe {
            edges {
                node {
                        slug
                    }
                }
            }
        }  
    `).then(result => {
      result.data.allDatoCmsRecipe.edges.map(edge => {
        createPage({
          path: `recipes/${edge.node.slug}`,
          component: path.resolve(`./src/templates/recipe.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })      
      resolve()
    })
  })
}
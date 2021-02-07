const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    {
        allDatoCmsTag {
            edges {
                node {
                    slug
                }
            }
        } 
    } 
    `).then(result => {
      result.data.allDatoCmsTag.edges.map(edge => {
        createPage({
          path: `tags/${edge.node.slug}`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })      
      resolve()
    })
  })
}